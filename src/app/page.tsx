import Link from "next/link";
import { faqs, offers, primaryAudience, useCases } from "@/components/site-data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Freight AI implementation</span>
            <h1>
              Deploy AI into your freight business <span className="accent-text">without replacing your TMS</span>
            </h1>
            <p className="hero-copy">
              FreightClaw helps freight agents, brokers, 3PLs, and carriers automate
              quoting, tracking, exceptions, claims, re-bills, onboarding, and customer
              communication using systems built on live freight.
            </p>
            <div className="cta-row">
              <Link href="/playbook" className="button">
                Get the Playbook
              </Link>
              <Link href="/book" className="button button-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          <aside className="hero-panel">
            <span className="eyebrow" style={{ color: "#fecaca" }}>
              What changes first
            </span>
            <h2>Turn repetitive freight communication into a documented operating system.</h2>
            <div className="stat-grid">
              <div className="stat-card">
                <strong>24/7</strong>
                <span>customer response coverage without staffing every shift</span>
              </div>
              <div className="stat-card">
                <strong>1 layer</strong>
                <span>on top of your current TMS, inbox, and operating SOPs</span>
              </div>
              <div className="stat-card">
                <strong>4 offers</strong>
                <span>from low-ticket guide to high-touch deployment</span>
              </div>
              <div className="stat-card">
                <strong>5 months</strong>
                <span>to implement with your team through the Accelerator</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Who this is for</span>
              <h2>Built for freight teams that already know where the repetition is.</h2>
            </div>
            <p className="section-copy">
              FreightClaw is not another TMS. It is a practical AI layer that helps
              customer-facing teams quote faster, respond faster, standardize workflows,
              and scale service without a rip-and-replace software project.
            </p>
          </div>
          <div className="feature-grid">
            {primaryAudience.map((item) => (
              <article key={item} className="feature-card">
                <h3>{item}</h3>
                <p className="detail-copy">
                  Best fit if you are already handling recurring inquiries, exceptions,
                  quote requests, and process-heavy coordination work every day.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Use cases</span>
              <h2>Start with the workflows that drain the most time first.</h2>
            </div>
            <p className="section-copy">
              The first FreightClaw implementations should focus on the highest-friction
              customer service and ops loops, not broad AI transformation theater.
            </p>
          </div>
          <div className="feature-grid">
            {useCases.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p className="detail-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Founder</span>
              <h2>Built by a freight broker who got tired of running his brokerage like it was 2019.</h2>
            </div>
            <p className="section-copy">
              FreightClaw was built inside a live freight operation before it was ever
              sold as a service.
            </p>
          </div>
          <div className="split-panel">
            <article className="detail-panel">
              <h3>Nathan Crooks</h3>
              <p className="detail-copy">
                I&apos;m a freight broker, not a software guy. I run Fair Trade Logistics,
                a coffee-focused truckload and LTL transportation agency. I know what it
                is like to compete with big-box 3PLs where speed is everything and price
                matters.
              </p>
              <p className="detail-copy">
                We needed faster quoting, faster tracking, consistent marketing, prospect
                nurturing, and better customer onboarding to scale beyond good enough.
              </p>
            </article>
            <article className="detail-panel">
              <h3>Why FreightClaw exists</h3>
              <p className="detail-copy">
                One day I realized my team and I were still copy-pasting tracking
                numbers, manually quoting and booking shipments, and answering where&apos;s
                my shipment calls at 6pm. So I fixed it.
              </p>
              <p className="detail-copy">
                I built FreightClaw inside my own agency on live freight, with real
                customers, real carriers, and real money on the line. Every workflow and
                integration was proven before it ever hit this page.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Offer ladder</span>
              <h2>Start with the roadmap. Stay for implementation.</h2>
            </div>
            <p className="section-copy">
              The ladder is structured so someone can enter with a guide, stay in the
              community, or hire FreightClaw to help implement with or for them.
            </p>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className={`offer-card${offer.featured ? " featured" : ""}`}
              >
                <span className="eyebrow">{offer.price}</span>
                <h3>{offer.title}</h3>
                <p className="detail-copy">{offer.description}</p>
                <ul className="bullet-list">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="banner">
            <span className="eyebrow">Why FreightClaw</span>
            <h2>Built on live freight. Not a pitch deck.</h2>
            <p className="detail-copy">
              The message is straightforward: deploy AI into your freight business with a
              system that fits your current operation, customer volume, and team maturity.
            </p>
          </div>
          <div className="banner">
            <span className="eyebrow">Primary CTA</span>
            <h2>If you are still running your brokerage like it is 2019, you are leaving money and time on the table.</h2>
            <p className="detail-copy">
              FreightClaw gives you a practical way to fix it before you buy bloated
              enterprise software or keep adding manual labor.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Common objections the site should answer early.</h2>
            </div>
          </div>
          <div className="detail-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="detail-panel">
                <h3>{faq.question}</h3>
                <p className="detail-copy">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
