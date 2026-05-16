import { Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function CurrentFocus() {
  return (
    <section className="section section-container">
      <SectionHeader
        eyebrow="Current Focus"
        title="Where I am applying architecture thinking now"
        description="Areas where I am actively designing, modernising and scaling enterprise capabilities."
      />

      <div className="focus-list">
        {profile.focusAreas.map((item) => (
          <div className="focus-item" key={item}>
            <Sparkles size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
