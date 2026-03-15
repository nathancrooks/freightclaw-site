import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Full Deployment",
};

export default function DeploymentPage() {
  return (
    <PageShell
      eyebrow="Done for you"
      title="We help design and deploy your freight AI system."
      description="FreightClaw Full Deployment is a higher-touch three-month engagement for companies that want workflow design, setup guidance, documentation, and handoff support without building the operating system alone."
      primaryCta={{ href: "/book", label: "Contact Us" }}
      secondaryCta={{ href: "/book", label: "Contact Us" }}
      aside={
        <>
          <span className="eyebrow">Contact Us</span>
          <h3>Premium implementation path.</h3>
          <p className="detail-copy">
            Position this as a deployment and handoff service with real workflow design,
            documentation, setup guidance, and operational rollout support.
          </p>
        </>
      }
    >
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-panel">
            <h3>Core scope</h3>
            <ul className="bullet-list">
              <li>Workflow architecture and service design</li>
              <li>Setup guidance and integration planning</li>
              <li>Knowledge base structuring and SOP documentation</li>
              <li>Admin training and lifetime community access</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>Feature stack</h3>
            <ul className="bullet-list">
              <li>High-touch workflow mapping and deployment planning</li>
              <li>Implementation guidance for quoting, tracking, claims, and onboarding</li>
              <li>Documentation package and setup guides for long-term use</li>
              <li>Admin handoff so your team is not dependent on outside help forever</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>Operator benefits</h3>
            <ul className="bullet-list">
              <li>Faster deployment without building everything from scratch internally</li>
              <li>More consistent customer experience across the freight lifecycle</li>
              <li>Reduced manual workload in high-volume service workflows</li>
              <li>A documented system ready for team adoption and scale</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>Best fit</h3>
            <p className="detail-copy">
              Teams with clear demand, operating complexity, and enough internal buy-in to
              support a premium deployment engagement.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Positioning</h3>
            <p className="detail-copy">
              Sell the outcome: a documented freight AI operating layer that is ready for
              the client team to run after handoff.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
