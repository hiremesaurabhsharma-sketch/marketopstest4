const services = [
  "Ecommerce Solutions",
  "Performance Marketing",
  "Website & Developments",
  "SEO ( Search Engine Optimization )",
  "Marketing Creative",
  "Overseas Business Development",
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
