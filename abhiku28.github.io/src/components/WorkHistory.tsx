import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function WorkHistory() {
  return (
    <section className="section section-container">
      <SectionHeader
        eyebrow="Career Journey"
        title="19+ years of architecture and delivery across enterprise platforms"
        description="From billing systems to AI-driven automation — a track record of designing and shipping platforms at scale."
      />

      <div className="timeline">
        {profile.workHistory.map((role, index) => (
          <article className="timeline-card" key={index}>
            <div className="timeline-marker">
              <Briefcase size={18} />
            </div>
            <div className="timeline-content">
              <p className="timeline-period">{role.period}</p>
              <h3>{role.role}</h3>
              <p className="timeline-company">
                {role.company} · {role.location}
              </p>
              <ul className="timeline-highlights">
                {role.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
