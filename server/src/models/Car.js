import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    fuelType: { type: String, required: true, trim: true },
    transmission: { type: String, required: true, trim: true },
    priceInLakhs: { type: Number, required: true },
    horsepower: { type: Number, required: true },
    topSpeed: { type: Number, required: true },
    seatingCapacity: { type: Number, required: true },
    mileage: { type: String, required: true, trim: true },
    launchYear: { type: Number, required: true },
    image: { type: String, required: true, trim: true },
    accent: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    features: [{ type: String, trim: true }]
  },
  { timestamps: true }
);

export const Car = mongoose.models.Car || mongoose.model("Car", carSchema);
