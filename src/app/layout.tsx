import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { LobsterShieldMark } from "@/components/logo-marks";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "FreightClaw",
    template: "%s | FreightClaw",
  },
  description:
    "FreightClaw helps brokers, carriers, and 3PLs deploy AI workflows for tracking, exception handling, claims, and customer communication.",
};

const navLinks = [
  { href: "/playbook", label: "Get the Playbook" },
  { href: "/community", label: "Join Our Community" },
  { href: "/accelerator", label: "Accelerator" },
  { href: "/deployment", label: "Full Deployment" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link href="/" className="brand-mark" aria-label="FreightClaw home">
                <span className="brand-glyph">
                  <LobsterShieldMark className="lobster-mark" />
                </span>
                <span className="brand-copy">
                  <strong>FreightClaw</strong>
                </span>
              </Link>
              <nav className="site-nav" aria-label="Primary">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link href="/book" className="button button-small">
                Contact Us
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <div>
                <p className="footer-title">FreightClaw</p>
                <p className="footer-copy">
                  Deploy AI into your freight business without replacing your TMS.
                </p>
              </div>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
