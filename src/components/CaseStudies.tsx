import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function CaseStudies() {
  return (
    <section className="section section-container" id="case-studies">
      <SectionHeader
        eyebrow="Architecture Case Studies"
        title="Selected platform and modernisation highlights"
        description="Examples of enterprise architecture work across revenue assurance, AI automation, fraud, bad debt and collections."
      />

      <div className="case-grid">
        {profile.caseStudies.map((item, index) => (
          <article className="case-card" key={item.title}>
            <div className="case-card__number">{String(index + 1).padStart(2, "0")}</div>
            <div className="case-card__body">
              <p className="case-card__theme">{item.theme}</p>
              <h3>{item.title}</h3>
              <p><strong>Context:</strong> {item.context}</p>
              <p><strong>Architecture:</strong> {item.architecture}</p>
              <p><strong>Scale:</strong> {item.scale}</p>
              <p><strong>Outcome:</strong> {item.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
