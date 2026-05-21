const previewServices = [
  "Performance Marketing",
  "Creative Strategy",
  "Ecommerce Optimization",
  "SEO & Content Systems",
  "Web Experience Design",
  "Global Growth Enablement",
];

const features = [
  { title: "Live Campaign War-Room", text: "Every funnel stage tracked in one premium command center with actionable insights." },
  { title: "AI + Human Creative Lab", text: "Fast concepting, polished visuals, and performance-led messaging for each audience segment." },
  { title: "Growth Automation Suite", text: "Retention flows, remarketing, and lifecycle journeys that compound monthly revenue." },
];

export default function ServicesPage() {
  return (
    <section>
      <div className="hero glass-card tilt-float shimmer">
        <span className="pill">MarketOps • Luxury Growth Experience</span>
        <h1>Beautiful Websites + Powerful Growth Systems</h1>
        <p>
          Aapke brand ko premium look, smooth user experience, aur high-converting digital engine ke saath scale karne ke liye
          complete design + marketing ecosystem.
        </p>
        <div className="hero-cta-row">
          <button className="btn btn-primary">Book Strategy Call</button>
          <button className="btn btn-ghost">View Capability Deck</button>
        </div>
      </div>

      <div className="section-head">
        <h2 className="section-title">Services Preview</h2>
        <span className="muted">Final detailed services list aap share karoge to instantly replace kar denge.</span>
      </div>

      <div className="grid">
        {previewServices.map((service, index) => (
          <article className="card glass-card" key={service} style={{ animationDelay: `${index * 80}ms` }}>
            <h3>{service}</h3>
            <p>Premium execution built for scale, speed, and measurable impact.</p>
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
