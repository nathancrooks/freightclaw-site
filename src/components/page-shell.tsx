import Link from "next/link";
import { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  aside?: ReactNode;
  children: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
  children,
}: PageShellProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container content-grid">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="page-hero-copy">{description}</p>
            <div className="cta-row">
              <Link href={primaryCta.href} className="button">
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="button button-secondary">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          {aside ? <aside className="detail-panel">{aside}</aside> : null}
        </div>
      </section>
      {children}
    </>
  );
}
