export function Filters({ brands, activeBrand, search, onBrandChange, onSearchChange }) {
  return (
    <section className="filters">
      <div>
        <label htmlFor="brand">Filter by brand</label>
        <select id="brand" value={activeBrand} onChange={(event) => onBrandChange(event.target.value)}>
          <option value="All">All brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="search">Search cars</label>
        <input
          id="search"
          type="search"
          placeholder="Search by model, brand, or type"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    </section>
  );
}
