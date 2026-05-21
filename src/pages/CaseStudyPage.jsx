const stats = [
  ["+212%", "Revenue Growth"],
  ["-41%", "Cost Per Acquisition"],
  ["3.8x", "ROAS Lift"],
];

export default function CaseStudyPage() {
  return (
    <section className="content-page">
      <div className="glass-card block">
        <h2 className="section-title">Case Study</h2>
        <p>
          For a fast-scaling ecommerce brand, we rebuilt the funnel with creative testing, landing page UX, and segmented
          automations—leading to consistent month-on-month growth.
        </p>
      </div>

      <div className="stat-grid">
        {stats.map(([num, label], idx) => (
          <article className="stat glass-card" key={label} style={{ animationDelay: `${idx * 120}ms` }}>
            <strong>{num}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
