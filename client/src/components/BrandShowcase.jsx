export function BrandShowcase({ brands, activeBrand, totalCars, onBrandSelect }) {
  return (
    <section className="brand-showcase">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Brand Directory</p>
          <h2>Navigate the collection brand by brand, then compare the strongest options.</h2>
        </div>
        <p className="section-copy">
          Each brand card gives a quick overview of the available catalogue so the browsing flow
          feels structured, informative, and presentation-ready.
        </p>
      </div>

      <div className="brand-grid">
        <button
          type="button"
          className={activeBrand === "All" ? "brand-card brand-card--active" : "brand-card"}
          onClick={() => onBrandSelect("All")}
        >
          <span className="brand-card__badge">Full Catalog</span>
          <strong>All Brands</strong>
          <p>Browse the full collection of {totalCars} comparison-ready cars.</p>
        </button>

        {brands.map((brand) => (
          <button
            type="button"
            key={brand.name}
            className={activeBrand === brand.name ? "brand-card brand-card--active" : "brand-card"}
            onClick={() => onBrandSelect(brand.name)}
          >
            <span className="brand-card__badge">{brand.count} cars</span>
            <strong>{brand.name}</strong>
            <p>
              Segments: {brand.categories.slice(0, 2).join(", ")}
              {brand.categories.length > 2 ? " +" : ""}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
