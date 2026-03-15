import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Playbook",
};

export default function PlaybookPage() {
  return (
    <PageShell
      eyebrow="Top of funnel offer"
      title="The Freight AI Implementation Playbook"
      description="A field-tested implementation guide for freight operators who want to automate quoting, tracking, claims, follow-up, and onboarding without hiring a dev team."
      primaryCta={{ href: "/book", label: "Get the Playbook" }}
      secondaryCta={{ href: "/community", label: "Join Our Community" }}
      aside={
        <>
          <span className="eyebrow">$47</span>
          <h3>Entry product with a clear next step.</h3>
          <p className="detail-copy">
            This should qualify buyers into the Community, Accelerator, or Deployment
            based on urgency and team capacity.
          </p>
        </>
      }
    >
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-panel">
            <h3>What is inside</h3>
            <ul className="bullet-list">
              <li>Freight AI workflow map for quoting, tracking, claims, docs, and exceptions</li>
              <li>Stack recommendations and implementation sequencing</li>
              <li>ROI worksheet and operator scorecard</li>
              <li>30-day rollout plan for the first workflow</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>What it should do</h3>
            <p className="detail-copy">
              Move a skeptical operator from curiosity to clarity. The buyer should leave
              knowing what to automate first and whether they should self-implement or
              hire FreightClaw.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Best upgrade path</h3>
            <p className="detail-copy">
              The Community is the natural next step. Operators who want direct guidance
              should move into the Accelerator instead of stalling in research mode.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
