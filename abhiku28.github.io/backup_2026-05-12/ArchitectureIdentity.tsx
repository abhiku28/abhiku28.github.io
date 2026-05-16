import { CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function ArchitectureIdentity() {
  return (
    <section className="section section-container">
      <SectionHeader
        eyebrow="Architecture Identity"
        title="Designed for business value, scale and operational safety"
        description="My architecture approach combines enterprise context, platform thinking, AI/data engineering and delivery ownership."
      />

      <div className="identity-grid">
        {profile.identity.map((item) => (
          <article className="identity-card" key={item}>
            <CheckCircle2 size={20} />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
