import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function BookPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container content-grid">
          <div>
            <span className="eyebrow">Contact us</span>
            <h1>Contact FreightClaw about the right offer before you build the wrong thing.</h1>
            <p className="page-hero-copy">
              This page should qualify operators, route serious buyers into the
              Accelerator or Deployment, and keep low-intent prospects moving into the
              Playbook or Community first.
            </p>
            <div className="cta-row">
              <a href="https://calendly.com/" className="button">
                Contact Us
              </a>
              <Link href="/pricing" className="button button-secondary">
                Review Offers
              </Link>
            </div>
          </div>
          <aside className="detail-panel">
            <span className="eyebrow">Call criteria</span>
            <h3>Best fit for owners with clear freight workflow pain.</h3>
            <ul className="bullet-list">
              <li>Repetitive customer service workload</li>
              <li>Documented ops team or SOPs in progress</li>
              <li>Urgency to improve response speed without extra headcount</li>
              <li>Budget alignment with Accelerator or Full Deployment</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <article className="detail-panel">
            <h3>Use this page to filter well</h3>
            <p className="detail-copy">
              Strong applications should include company type, team size, current
              workflow bottlenecks, existing systems, and the highest-cost repetitive
              communication problem.
            </p>
          </article>
          <article className="detail-panel">
            <h3>What to add later</h3>
            <p className="detail-copy">
              Replace the temporary booking button with Calendly or Cal.com, then add a
              short qualification form before the call if you want tighter fit.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
