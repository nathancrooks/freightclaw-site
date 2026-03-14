import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Accelerator",
};

export default function AcceleratorPage() {
  return (
    <PageShell
      eyebrow="Done with you"
      title="Build your freight AI workflows with us in 5 months."
      description="The FreightClaw Accelerator is a guided implementation program for owners who want to launch real AI workflows with their team instead of staying stuck at the strategy layer."
      primaryCta={{ href: "/book", label: "Apply for the Accelerator" }}
      secondaryCta={{ href: "/pricing", label: "Review the Ladder" }}
      aside={
        <>
          <span className="eyebrow">$9,800 or $1,960/mo</span>
          <h3>Hands-on implementation support.</h3>
          <p className="detail-copy">
            The offer needs to feel like direct build guidance, not paid community access.
          </p>
        </>
      }
    >
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-panel">
            <h3>Month 1</h3>
            <p className="detail-copy">
              Audit current ops, define the implementation roadmap, choose the first
              workflow, and document the baseline customer-service process.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Months 2-4</h3>
            <p className="detail-copy">
              Build the first priority workflows, create documentation, refine
              escalation rules, and train the team on the new operating rhythm.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Month 5</h3>
            <p className="detail-copy">
              Lock in reporting, handoff documentation, team training, and the next
              iteration plan so the system survives after the engagement ends.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
