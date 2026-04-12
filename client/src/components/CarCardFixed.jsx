export function CarCardFixed({ car, isSelected, onToggleCompare }) {
  return (
    <article className="car-card">
      <div className="car-card__media" style={{ "--accent": car.accent }}>
        <img src={car.image} alt={`${car.brand} ${car.model}`} />
      </div>

      <div className="car-card__body">
        <div className="car-card__header">
          <div>
            <p className="car-card__brand">{car.brand}</p>
            <h3>{car.model}</h3>
            <p className="car-card__meta">
              {car.launchYear} model | {car.fuelType} | {car.transmission}
            </p>
          </div>
          <span className="price-tag">Rs {car.priceInLakhs}L</span>
        </div>

        <p className="car-card__summary">{car.summary}</p>

        <div className="spec-grid">
          <div>
            <span>Category</span>
            <strong>{car.category}</strong>
          </div>
          <div>
            <span>Power</span>
            <strong>{car.horsepower} hp</strong>
          </div>
          <div>
            <span>Top speed</span>
            <strong>{car.topSpeed} km/h</strong>
          </div>
          <div>
            <span>Seats</span>
            <strong>{car.seatingCapacity}</strong>
          </div>
          <div>
            <span>Mileage</span>
            <strong>{car.mileage}</strong>
          </div>
          <div>
            <span>Fuel</span>
            <strong>{car.fuelType}</strong>
          </div>
        </div>

        <div className="feature-list">
          {car.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <button
          type="button"
          className={isSelected ? "compare-button compare-button--active" : "compare-button"}
          onClick={() => onToggleCompare(car.id)}
        >
          {isSelected ? "Selected for Compare" : "Add to Compare"}
        </button>
      </div>
    </article>
  );
}
