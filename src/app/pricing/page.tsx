import type { Metadata } from "next";
import Link from "next/link";
import { faqs, offers } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Pricing",
};

const comparisonRows = [
  ["Clear roadmap", "Yes", "Yes", "Yes", "Yes"],
  ["Office hours and feedback", "-", "Yes", "Yes", "Yes"],
  ["Custom workflow design", "-", "-", "Yes", "Yes"],
  ["Team training", "-", "-", "Yes", "Yes"],
  ["Documentation and SOPs", "Light", "Template-based", "Yes", "Yes"],
  ["High-touch implementation", "-", "-", "Moderate", "High"],
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container content-grid">
          <div>
            <span className="eyebrow">Pricing</span>
            <h1>Choose the FreightClaw path that matches your stage.</h1>
            <p className="page-hero-copy">
              Start with strategy, get support implementing, or hire FreightClaw to
              help build the operating system with or for you.
            </p>
            <div className="cta-row">
              <Link href="/book" className="button">
                Contact Us
              </Link>
              <Link href="/playbook" className="button button-secondary">
                Get the Playbook
              </Link>
            </div>
          </div>
          <aside className="detail-panel">
            <span className="eyebrow">Recommended</span>
            <h3>Lead serious operators into the Accelerator.</h3>
            <p className="detail-copy">
              The Playbook and Community should educate. The Accelerator should be the
              main implementation offer for owners who want results with support.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-grid">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className={`price-card${offer.featured ? " featured" : ""}`}
            >
              <span className="eyebrow">{offer.title}</span>
              <span className="price">{offer.price}</span>
              <p className="detail-copy">{offer.description}</p>
              <ul className="bullet-list">
                {offer.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Comparison</span>
              <h2>Make the offer boundaries obvious.</h2>
            </div>
          </div>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Playbook</th>
                  <th>Community</th>
                  <th>Accelerator</th>
                  <th>Full Deployment</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    {row.slice(1).map((value) => (
                      <td key={value} className={value === "Yes" ? "check" : undefined}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          {faqs.map((faq) => (
            <article key={faq.question} className="detail-panel">
              <h3>{faq.question}</h3>
              <p className="detail-copy">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
