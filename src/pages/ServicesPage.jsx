const previewServices = [
  "Performance Marketing",
  "Creative Strategy",
  "Ecommerce Optimization",
  "SEO & Content Systems",
  "Web Experience Design",
  "Global Growth Enablement",
];

const features = [
  { title: "Real-Time Dashboard", text: "Campaign snapshots, funnel-level metrics, and clean growth reporting across channels." },
  { title: "Creative Engine", text: "High-velocity ad creatives and landing variants built for conversion and retention." },
  { title: "Revenue Automation", text: "Email, remarketing, and audience workflows designed to scale profitably." },
];

export default function ServicesPage() {
  return (
    <section>
      <div className="hero glass-card tilt-float">
        <span className="pill">Premium Growth Partner</span>
        <h1>Design. Marketing. Performance.</h1>
        <p>
          Beautiful brand experiences with performance-first execution. We are currently polishing the full services list;
          your exact services can be plugged in instantly once shared.
        </p>
        <div className="hero-cta-row">
          <button className="btn btn-primary">Start Project</button>
          <button className="btn btn-ghost">Explore Work</button>
        </div>
      </div>

      <div className="section-head">
        <h2 className="section-title">Services Preview</h2>
        <span className="muted">(Final services can be updated later)</span>
      </div>

      <div className="grid">
        {previewServices.map((service, index) => (
          <article className="card glass-card" key={service} style={{ animationDelay: `${index * 80}ms` }}>
            <h3>{service}</h3>
            <p>High-impact strategy and execution tailored for measurable business growth.</p>
          </article>
        ))}
      </div>

      <div className="feature-grid">
        {features.map((f, index) => (
          <article className="feature glass-card" key={f.title} style={{ animationDelay: `${index * 140}ms` }}>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
