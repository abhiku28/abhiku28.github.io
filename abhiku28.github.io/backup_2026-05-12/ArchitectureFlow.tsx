export function ArchitectureFlow() {
  return (
    <section className="section section-container">
      <div className="architecture-flow">
        <div>
          <p className="eyebrow">Operating Model</p>
          <h2>From business problem to production-grade architecture</h2>
          <p>
            I connect strategy, data, AI, integration and operations into a
            single architecture path that can be delivered and supported.
          </p>
        </div>

        <div className="flow-grid" aria-label="Architecture flow">
          <div className="flow-node">Business Problem</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">Architecture Design</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">Data Platform</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">AI / ML Decision Layer</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">APIs & Automation</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node flow-node--highlight">Business Outcome</div>
        </div>
      </div>
    </section>
  );
}
