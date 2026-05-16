import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function Capabilities() {
  return (
    <section className="section section-container">
      <SectionHeader
        eyebrow="Technology Landscape"
        title="Tools and capabilities across AI, data, cloud and delivery"
        description="A practical architecture toolkit spanning platform design, engineering, integration and operational delivery."
      />

      <div className="capability-grid">
        {profile.capabilities.map((capability) => (
          <article className="capability-card" key={capability.title}>
            <h3>{capability.title}</h3>
            <div className="tag-list">
              {capability.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
