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
      primaryCta={{ href: "/book", label: "Book a Call" }}
      secondaryCta={{ href: "/pricing", label: "Review the Ladder" }}
      aside={
        <>
          <span className="eyebrow">Book a Call</span>
          <h3>Hands-on implementation support for serious operators.</h3>
          <p className="detail-copy">
            Position this around outcomes: faster quotes, better customer response,
            cleaner claims flow, stronger onboarding, and a team that knows how to run
            the system after rollout.
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
              Build the first priority quoting, tracking, exception, claims, and
              onboarding workflows, create documentation, refine escalation rules, and
              train the team on the new operating rhythm.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Month 5</h3>
            <p className="detail-copy">
              Lock in reporting, handoff documentation, team training, and the next
              iteration plan so the system survives after the engagement ends.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Feature stack</h3>
            <ul className="bullet-list">
              <li>Weekly working sessions with direct implementation guidance</li>
              <li>Custom workflow design for quoting, tracking, claims, and onboarding</li>
              <li>SOP and documentation buildout for team adoption</li>
              <li>Escalation logic, service rules, and rollout planning</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>Operator benefits</h3>
            <ul className="bullet-list">
              <li>Faster quote response without adding more manual admin</li>
              <li>Fewer after-hours status calls and repetitive updates</li>
              <li>Cleaner handoff between customer communication and ops execution</li>
              <li>A system your team can actually use after the engagement</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>Best fit</h3>
            <p className="detail-copy">
              Best for freight agents, brokers, and 3PL owners who want direct help
              implementing with their team and do not want to lose months in DIY mode.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
