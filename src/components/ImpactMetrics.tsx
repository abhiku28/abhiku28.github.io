import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function ImpactMetrics() {
  return (
    <section className="section section-container">
      <SectionHeader
        eyebrow="Enterprise Impact"
        title="Architecture outcomes with measurable business value"
        description="A snapshot of business impact delivered through data platforms, AI automation and cloud modernisation."
      />

      <div className="metrics-grid">
        {profile.impact.map((item) => (
          <article className="metric-card" key={item.metric}>
            <strong>{item.metric}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
