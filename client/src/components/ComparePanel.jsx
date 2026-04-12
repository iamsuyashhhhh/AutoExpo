const compareRows = [
  { label: "Brand", key: "brand" },
  { label: "Category", key: "category" },
  { label: "Price", key: "priceInLakhs", format: (value) => `Rs ${value}L` },
  { label: "Fuel", key: "fuelType" },
  { label: "Transmission", key: "transmission" },
  { label: "Horsepower", key: "horsepower", format: (value) => `${value} hp` },
  { label: "Top Speed", key: "topSpeed", format: (value) => `${value} km/h` },
  { label: "Mileage", key: "mileage" },
  { label: "Seats", key: "seatingCapacity" }
];

export function ComparePanel({ cars, onClear }) {
  return (
    <section className="compare-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Comparison Studio</p>
          <h2>Review specifications side by side and make the choice feel obvious.</h2>
        </div>
        <button type="button" className="ghost-button" onClick={onClear}>
          Clear compare
        </button>
      </div>

      {cars.length === 0 ? (
        <div className="compare-empty">
          <p>Select up to 3 cars to compare pricing, performance, practicality, and features.</p>
        </div>
      ) : (
        <div className="compare-table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Specification</th>
                {cars.map((car) => (
                  <th key={car.id}>
                    <div className="compare-head">
                      <img src={car.image} alt={`${car.brand} ${car.model}`} />
                      <div>
                        <span>{car.brand}</span>
                        <strong>{car.model}</strong>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.key}>
                  <td>{row.label}</td>
                  {cars.map((car) => (
                    <td key={`${car.id}-${row.key}`}>
                      {row.format ? row.format(car[row.key]) : car[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>Highlights</td>
                {cars.map((car) => (
                  <td key={`${car.id}-features`}>{car.features.join(", ")}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
