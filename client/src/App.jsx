import { useEffect, useState } from "react";
import { Hero } from "./components/Hero.jsx";
import { BrandShowcase } from "./components/BrandShowcase.jsx";
import { Filters } from "./components/Filters.jsx";
import { CarCardFixed as CarCard } from "./components/CarCardFixed.jsx";
import { ComparePanel } from "./components/ComparePanel.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function App() {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandMeta, setBrandMeta] = useState([]);
  const [activeBrand, setActiveBrand] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [compareCars, setCompareCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const totalCars = brandMeta.reduce((sum, brand) => sum + brand.count, 0);
  const avgPrice = cars.length
    ? (cars.reduce((sum, car) => sum + car.priceInLakhs, 0) / cars.length).toFixed(1)
    : "0.0";

  useEffect(() => {
    const controller = new AbortController();

    const loadCars = async () => {
      try {
        setIsLoading(true);
        setError("");

        const params = new URLSearchParams();
        if (activeBrand !== "All") params.set("brand", activeBrand);
        if (search.trim()) params.set("search", search.trim());

        const response = await fetch(`${API_BASE_URL}/cars?${params.toString()}`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Unable to load cars right now.");
        }

        const data = await response.json();
        setCars(data.cars || []);
        setBrands(data.brands || []);
        setBrandMeta(data.brandMeta || []);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadCars();

    return () => controller.abort();
  }, [activeBrand, search]);

  useEffect(() => {
    if (selectedIds.length === 0) {
      setCompareCars([]);
      return;
    }

    const controller = new AbortController();

    const loadCompareCars = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/cars/compare?ids=${selectedIds.join(",")}`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Compare data could not be loaded.");
        }

        const data = await response.json();
        setCompareCars(data.cars || []);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      }
    };

    loadCompareCars();

    return () => controller.abort();
  }, [selectedIds]);

  const handleToggleCompare = (carId) => {
    setSelectedIds((current) => {
      if (current.includes(carId)) {
        return current.filter((id) => id !== carId);
      }

      if (current.length === 3) {
        return [...current.slice(1), carId];
      }

      return [...current, carId];
    });
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">AE</span>
          <div>
            <strong>AutoExpo</strong>
            <p>Automotive discovery and comparison platform</p>
          </div>
        </div>
        <nav className="topbar__nav">
          <a href="#discover">Discover</a>
          <a href="#insights">Insights</a>
          <a href="#compare">Compare</a>
          <a href="#pitch">Presentation</a>
        </nav>
      </header>

      <main>
        <Hero totalCars={totalCars || cars.length || 5} totalBrands={brands.length} compareCount={3} />

        <section className="brand-strip" aria-label="Featured brands">
          {brands.slice(0, 8).map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </section>

        <section id="insights" className="insight-ribbon">
          <div className="insight-card">
            <span>Active catalog</span>
            <strong>{totalCars} cars</strong>
          </div>
          <div className="insight-card">
            <span>Covered brands</span>
            <strong>{brands.length} brands</strong>
          </div>
          <div className="insight-card">
            <span>Average visible price</span>
            <strong>Rs {avgPrice}L</strong>
          </div>
          <div className="insight-card">
            <span>Comparison capacity</span>
            <strong>3 at a time</strong>
          </div>
        </section>

        <section className="section-block section-block--compact">
          <BrandShowcase
            brands={brandMeta}
            activeBrand={activeBrand}
            totalCars={totalCars}
            onBrandSelect={setActiveBrand}
          />
        </section>

        <section id="discover" className="section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Discover Cars</p>
              <h2>Browse a structured catalogue, shortlist standout models, and compare them with confidence.</h2>
            </div>
            <p className="section-copy">
              The browsing experience is now designed like a proper platform, making your project
              look more serious, more complete, and easier to explain during demonstrations.
            </p>
          </div>

          <Filters
            brands={brands}
            activeBrand={activeBrand}
            search={search}
            onBrandChange={setActiveBrand}
            onSearchChange={setSearch}
          />

          {error ? <div className="status-card error">{error}</div> : null}
          {isLoading ? <div className="status-card">Loading cars...</div> : null}
          {!isLoading && !cars.length ? (
            <div className="status-card">No cars found for this search. Try another brand or keyword.</div>
          ) : null}

          {selectedIds.length ? (
            <div className="selection-bar">
              <strong>{selectedIds.length}/3 cars selected for comparison</strong>
              <p>
                The compare tray stays lightweight: adding a fourth car replaces the oldest selection.
              </p>
            </div>
          ) : null}

          <div className="car-grid">
            {cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isSelected={selectedIds.includes(car.id)}
                onToggleCompare={handleToggleCompare}
              />
            ))}
          </div>
        </section>

        <section id="compare" className="section-block">
          <ComparePanel cars={compareCars} onClear={() => setSelectedIds([])} />
        </section>

        <section id="pitch" className="pitch-panel">
          <div>
            <p className="eyebrow">Presentation Angle</p>
            <h2>Present it as a student-built platform that grew from a static site into a usable product.</h2>
          </div>
          <div className="pitch-panel__content">
            <p>
              A strong way to frame this project is to show evolution: the first version taught you
              HTML and CSS fundamentals, and this version proves you can redesign the original idea
              into a structured, interactive, and scalable full-stack concept.
            </p>
            <ul>
              <li>React makes the interface modular, dynamic, and product-like.</li>
              <li>Express exposes reusable APIs for the catalogue and comparison flow.</li>
              <li>MongoDB integration is already prepared through the Mongoose schema.</li>
              <li>The comparison studio transforms the project into a practical decision tool.</li>
            </ul>
          </div>
        </section>

        <footer className="footer">
          <div>
            <strong>AutoExpo</strong>
            <p>Professional MERN-style car comparison project for expo presentation.</p>
          </div>
          <p>Built for discovery, comparison, and confident product storytelling.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
