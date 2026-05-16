import { ExternalLink, Link, Mail } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <footer className="footer section-container">
      <div>
        <p className="eyebrow">Connect</p>
        <h2>Let’s build architecture that creates measurable outcomes.</h2>
        <p>
          I am interested in AI platforms, enterprise data products, cloud
          modernisation, solution architecture and operational automation.
        </p>
      </div>

      <div className="contact-links">
        <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          GitHub
        </a>
        <a href={profile.linkedin === "Add your LinkedIn URL" ? "#" : profile.linkedin}>
          <Link size={18} />
          LinkedIn
        </a>
        <a href={profile.email === "Add your preferred email" ? "#" : `mailto:${profile.email}`}>
          <Mail size={18} />
          Email
        </a>
      </div>
    </footer>
  );
}
