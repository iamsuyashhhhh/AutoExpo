export function Hero({ totalCars, totalBrands, compareCount }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">Professional Showcase</p>
        <h1>Discover, evaluate, and compare cars in one polished experience.</h1>
        <p className="hero__text">
          AutoExpo now feels like a real automotive product platform, built to help users browse
          trusted brands, shortlist standout models, and make confident side-by-side comparisons.
        </p>
        <div className="hero__actions">
          <a className="hero__cta" href="#discover">
            Explore Collection
          </a>
          <a className="hero__secondary" href="#compare">
            Open Compare Zone
          </a>
        </div>
        <div className="hero__stats">
          <div>
            <strong>{totalCars}</strong>
            <span>models available</span>
          </div>
          <div>
            <strong>{totalBrands}</strong>
            <span>major brands covered</span>
          </div>
          <div>
            <strong>{compareCount}</strong>
            <span>cars can be compared at once</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero-card">
          <img src="/logo.autoexpo.jpg" alt="AutoExpo logo" />
          <div className="hero-card__copy">
            <span>AutoExpo Platform</span>
            <h2>Professional car comparison dashboard for your project expo.</h2>
            <p>
              Designed to present your idea clearly, look credible in demos, and scale into a full
              MERN application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
