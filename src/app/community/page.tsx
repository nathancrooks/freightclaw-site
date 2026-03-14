import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Community",
};

export default function CommunityPage() {
  return (
    <PageShell
      eyebrow="Continuity offer"
      title="FreightClaw Operators Community"
      description="A Skool-based implementation lab for operators who want examples, templates, accountability, and office hours while they put FreightClaw systems in place."
      primaryCta={{ href: "/book", label: "Join the Waitlist Flow" }}
      secondaryCta={{ href: "/pricing", label: "See Pricing" }}
      aside={
        <>
          <span className="eyebrow">$97/mo</span>
          <h3>Support for self-implementers.</h3>
          <p className="detail-copy">
            Position this as a working operators&apos; room, not a passive community.
          </p>
        </>
      }
    >
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-panel">
            <h3>Member experience</h3>
            <ul className="bullet-list">
              <li>Weekly office hours and implementation workshops</li>
              <li>Prompt library, SOP templates, and call recordings</li>
              <li>Examples from brokers, carriers, and 3PL use cases</li>
              <li>Ongoing feedback on what to build next</li>
            </ul>
          </article>
          <article className="detail-panel">
            <h3>What separates it from the Accelerator</h3>
            <p className="detail-copy">
              Community is education and support. The Accelerator is direct
              implementation with your team, custom roadmap work, and hands-on
              weekly delivery.
            </p>
          </article>
          <article className="detail-panel">
            <h3>Retention angle</h3>
            <p className="detail-copy">
              Members should stay for updated templates, peer benchmarks, and
              implementation reviews as their system matures.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
