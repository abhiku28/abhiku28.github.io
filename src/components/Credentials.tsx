import { Award, GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function Credentials() {
  return (
    <section className="section section-container">
      <SectionHeader
        eyebrow="Education & Certifications"
        title="Formal qualifications and industry credentials"
        description="Academic foundation and professional certifications supporting architecture practice."
      />

      <div className="credentials-grid">
        <article className="credential-card credential-card--edu">
          <GraduationCap size={28} />
          <h3>{profile.education.degree}</h3>
          <p>
            {profile.education.institution} · {profile.education.location}
          </p>
        </article>

        <article className="credential-card credential-card--certs">
          <Award size={28} />
          <h3>Certifications</h3>
          <div className="tag-list">
            {profile.certifications.map((cert) => (
              <span key={cert}>{cert}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
