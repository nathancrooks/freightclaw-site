import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Deployment",
};

export default function DeploymentPage() {
  return (
    <PageShell
      eyebrow="Done for you"
      title="We help design and deploy your freight AI system."
      description="FreightClaw Deployment is a higher-touch three-month engagement for companies that want workflow design, setup guidance, documentation, and handoff support without building the operating system alone."
      primaryCta={{ href: "/book", label: "Book a Deployment Call" }}
      secondaryCta={{ href: "/pricing", label: "Compare Services" }}
      aside={
        <>
          <span className="eyebrow">$25,000</span>
          <h3>Premium implementation path.</h3>
          <p className="detail-copy">
            Position this as a deployment and handoff service, not “we click buttons for
            you for a few weeks.”
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
