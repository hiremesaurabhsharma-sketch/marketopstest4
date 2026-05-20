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
      <div className="hero">
        <h1>Performance-Driven Digital Growth Solutions</h1>
        <p>Scale faster with conversion-focused strategies, premium creative execution, and global-ready business operations.</p>
      </div>

      <h2 className="section-title">Service Page</h2>
      <div className="grid">
        {services.map((service, index) => (
          <article className="card" key={service} style={{ animationDelay: `${index * 90}ms` }}>
            <h3>{service}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
