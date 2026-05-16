import { ArrowUpRight, ExternalLink, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero section-container">
      <div className="hero__content">
        <p className="eyebrow">AI • Data • Cloud • Enterprise Architecture</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#case-studies">
            View architecture work
            <ArrowUpRight size={18} />
          </a>
          <a
            className="button button--secondary"
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} />
            GitHub
          </a>
        </div>

        <div className="hero__meta">
          <span>
            <MapPin size={16} />
            {profile.location}
          </span>
          <span>19+ years enterprise delivery</span>
        </div>
      </div>

      <div className="hero__panel">
        <div className="panel-card panel-card--top">
          <span>Architecture Theme</span>
          <strong>Business outcome to scalable platform</strong>
        </div>
        <div className="orbit">
          <div className="orbit__center">AI + Data</div>
          <span className="orbit__item orbit__item--one">Cloud</span>
          <span className="orbit__item orbit__item--two">APIs</span>
          <span className="orbit__item orbit__item--three">ML</span>
          <span className="orbit__item orbit__item--four">Ops</span>
        </div>
      </div>
    </section>
  );
}
