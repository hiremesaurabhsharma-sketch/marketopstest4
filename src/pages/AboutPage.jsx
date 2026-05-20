const values = ["Speed with Clarity", "Aesthetic + Analytics", "Long-term Brand Equity", "Obsessive Optimization"];

export default function AboutPage() {
  return (
    <section className="content-page">
      <div className="glass-card block">
        <h2 className="section-title">About Us</h2>
        <p>
          We are a creative performance studio helping brands grow through premium design systems, intelligent marketing,
          and conversion-led digital experiences.
        </p>
      </div>

      <div className="chips">
        {values.map((item, idx) => (
          <span key={item} className="chip glass-card" style={{ animationDelay: `${idx * 120}ms` }}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
