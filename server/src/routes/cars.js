import { Router } from "express";
import mongoose from "mongoose";
import { Car } from "../models/Car.js";
import { brandCatalog, brands, sampleCars } from "../data/cars.js";

const router = Router();

const mapCars = (cars) => cars.map((car) => ("toObject" in car ? car.toObject() : car));
const sortCarsByIds = (cars, ids) =>
  [...cars].sort((first, second) => ids.indexOf(first.id) - ids.indexOf(second.id));

router.get("/", async (req, res) => {
  const { brand, search } = req.query;

  if (mongoose.connection.readyState === 1) {
    const query = {};

    if (brand && brand !== "All") {
      query.brand = brand;
    }

    if (search) {
      query.$or = [
        { brand: { $regex: search, $options: "i" } },
        { model: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } }
      ];
    }

    const cars = await Car.find(query).sort({ priceInLakhs: 1 });
    const allCars = await Car.find({}, { brand: 1, category: 1, id: 1 }).lean();
    const brandMeta = [...new Set(allCars.map((car) => car.brand))]
      .sort()
      .map((brandName) => {
        const brandCars = allCars.filter((car) => car.brand === brandName);
        return {
          name: brandName,
          count: brandCars.length,
          categories: [...new Set(brandCars.map((car) => car.category))]
        };
      });

    return res.json({ cars: mapCars(cars), brands, brandMeta });
  }

  let cars = [...sampleCars];

  if (brand && brand !== "All") {
    cars = cars.filter((car) => car.brand === brand);
  }

  if (search) {
    const searchValue = search.toLowerCase();
    cars = cars.filter((car) =>
      [car.brand, car.model, car.category].some((value) =>
        value.toLowerCase().includes(searchValue)
      )
    );
  }

  res.json({ cars, brands, brandMeta: brandCatalog });
});

router.get("/compare", async (req, res) => {
  const ids = String(req.query.ids || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean)
    .slice(0, 3);

  if (!ids.length) {
    return res.status(400).json({ message: "Please provide up to three car ids." });
  }

  if (mongoose.connection.readyState === 1) {
    const cars = await Car.find({ id: { $in: ids } });
    return res.json({ cars: sortCarsByIds(mapCars(cars), ids) });
  }

  const cars = sortCarsByIds(
    sampleCars.filter((car) => ids.includes(car.id)),
    ids
  );
  res.json({ cars });
});

router.get("/brands", async (_req, res) => {
  if (mongoose.connection.readyState === 1) {
    const dbBrands = await Car.distinct("brand");
    return res.json({ brands: dbBrands.sort() });
  }

  res.json({ brands });
});

export default router;
