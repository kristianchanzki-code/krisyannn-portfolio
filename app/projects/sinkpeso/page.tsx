import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Database,
  Download,
  GitBranch,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "SINKPESO Case Study",
  description:
    "How Kristian Bailo designed and built a private, offline-first personal finance app for Filipinos.",
};

const features = [
  {
    icon: WalletCards,
    title: "Daily money management",
    text: "Track income, expenses, bills, recurring entries, wallets, transfers, budgets, and savings goals in one place.",
  },
  {
    icon: Camera,
    title: "Financial memory",
    text: "Attach photos and notes to expenses so the record preserves why the money was spent, not only the amount.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    text: "No account is required. Personal finance data stays on the device instead of being uploaded to a cloud account.",
  },
  {
    icon: Search,
    title: "Useful retrieval",
    text: "Search transactions, review history, inspect reports, and export or import data when needed.",
  },
];

const decisions = [
  {
    number: "01",
    title: "Offline before accounts",
    text: "The app had to remain useful without internet access and without asking users to create an account.",
  },
  {
    number: "02",
    title: "Philippine context",
    text: "The interface uses pesos and recognizes familiar Philippine wallets, banks, spending habits, bills, and informal debt.",
  },
  {
    number: "03",
    title: "Context before complexity",
    text: "Quick expense logging stays central, while notes, photos, categories, and wallets add meaning without blocking the action.",
  },
  {
    number: "04",
    title: "Ownership before synchronization",
    text: "Users retain local control of their data, with export and import tools for portability instead of automatic cloud collection.",
  },
];

const screens = [
  {
    src: "https://sinkpeso.github.io/screenshots/dashboard-desktop.png",
    alt: "SINKPESO dashboard with sample financial data",
    title: "Dashboard",
    text: "A consolidated view of available money, spending, savings, bills, wallets, and recent activity.",
    wide: true,
  },
  {
    src: "https://sinkpeso.github.io/screenshots/expenses-desktop.png",
    alt: "SINKPESO expense tracking screen with sample data",
    title: "Expense tracking",
    text: "Fast daily logging with categories, wallets, notes, dates, and readable transaction history.",
    wide: false,
  },
  {
    src: "https://sinkpeso.github.io/screenshots/diary-desktop.png",
    alt: "SINKPESO photo diary screen with sample data",
    title: "Photo diary",
    text: "A more human record of spending that connects transactions to moments, receipts, and personal context.",
    wide: false,
  },
];

export default function SinkpesoPage() {
  return (
    <article className="case-study sinkpeso-case-v3">
      <header className="sinkpeso-hero section-pad">
        <div className="shell">
          <Link className="back-link" href="/#work">
            <ArrowLeft size={17} />
            Back to selected work
          </Link>

          <div className="sinkpeso-hero-grid">
            <Reveal className="sinkpeso-hero-copy">
              <div className="sinkpeso-open-label">
                <GitBranch size={16} />
                Public open-source project
              </div>

              <p className="eyebrow">Personal finance / Offline web app</p>
              <h1>SINKPESO</h1>
              <p className="sinkpeso-tagline">Private. Offline. Yours.</p>

              <p className="page-lead">
                A personal finance app built for Filipinos who want to track
                everyday money without sending their financial data to an
                online account.
              </p>

              <div className="sinkpeso-actions">
                <a
                  className="button button-primary"
                  href="https://sinkpeso.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch SINKPESO
                  <ArrowUpRight size={17} />
                </a>

                <a
                  className="button button-secondary"
                  href="https://github.com/sinkpeso/sinkpeso.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  View source
                  <GitBranch size={17} />
                </a>
              </div>

              <div className="case-meta">
                <div>
                  <small>My role</small>
                  <strong>Product designer and AI-assisted builder</strong>
                </div>
                <div>
                  <small>Core principle</small>
                  <strong>Useful finance tools without cloud dependence</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="sinkpeso-preview-stage" delay={0.08}>
              <div className="sinkpeso-preview-glow" />
              <div className="sinkpeso-browser">
                <div className="sinkpeso-browser-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  src="https://sinkpeso.github.io/screenshots/dashboard-desktop.png"
                  alt="SINKPESO dashboard"
                />
              </div>

              <div className="sinkpeso-privacy-chip">
                <LockKeyhole size={16} />
                Data stays on the device
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="section-pad-sm sinkpeso-origin">
        <div className="shell case-grid">
          <Reveal>
            <p className="eyebrow">The starting point</p>
            <h2>I had a money problem, not a software idea.</h2>
          </Reveal>

          <Reveal className="long-copy" delay={0.08}>
            <p>
              I wanted a clearer way to manage income, bills, daily expenses,
              savings, wallets, and recurring obligations using Philippine
              pesos.
            </p>
            <p>
              Existing tools often assumed constant connectivity, required an
              account, or treated every transaction as a number without enough
              personal context. SINKPESO grew from wanting something simpler,
              more private, and closer to the way I actually manage money.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Product direction</p>
            <h2>A finance tracker should remember more than the total.</h2>
            <p className="sinkpeso-section-intro">
              The product combines practical budgeting with financial memory:
              what happened, why it happened, where the money came from, and
              what still needs attention.
            </p>
          </Reveal>

          <div className="sinkpeso-feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Reveal
                  className="sinkpeso-feature-card"
                  delay={index * 0.04}
                  key={feature.title}
                >
                  <Icon />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad-sm sinkpeso-local">
        <div className="shell sinkpeso-local-grid">
          <Reveal>
            <p className="eyebrow">Privacy architecture</p>
            <h2>No sign-up. No automatic cloud account. No telemetry.</h2>
            <p className="sinkpeso-local-copy">
              SINKPESO keeps the user&apos;s finance records in browser storage.
              The app is designed to work offline, while export and import
              tools give the user control over portability and backup.
            </p>
          </Reveal>

          <Reveal className="sinkpeso-local-flow" delay={0.08}>
            <div>
              <Smartphone />
              <span>Your browser</span>
            </div>

            <span>stores locally</span>

            <div>
              <Database />
              <span>Device storage</span>
            </div>

            <span>user controlled</span>

            <div>
              <Download />
              <span>Export / import</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Key product decisions</p>
            <h2>The constraints became part of the identity.</h2>
          </Reveal>

          <div className="sinkpeso-decisions">
            {decisions.map((decision, index) => (
              <Reveal
                className="sinkpeso-decision"
                delay={index * 0.04}
                key={decision.number}
              >
                <span>{decision.number}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad sinkpeso-gallery-section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Inside the product</p>
            <h2>Built around everyday financial actions.</h2>
            <p className="sinkpeso-section-intro">
              These screenshots come from the public SINKPESO project and use
              sample data rather than personal financial records.
            </p>
          </Reveal>

          <div className="sinkpeso-gallery">
            {screens.map((screen, index) => (
              <Reveal
                className={`sinkpeso-screen ${
                  screen.wide ? "sinkpeso-screen-wide" : ""
                }`}
                delay={index * 0.04}
                key={screen.src}
              >
                <div className="sinkpeso-screen-image">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className="sinkpeso-screen-copy">
                  <strong>{screen.title}</strong>
                  <p>{screen.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">What I contributed</p>
            <h2>I shaped the product from the behavior outward.</h2>
          </Reveal>

          <div className="case-list">
            {[
              "Defined the product around a real personal finance problem rather than a tutorial brief.",
              "Designed the information architecture for expenses, wallets, bills, savings, recurring entries, debt, history, and reports.",
              "Made offline use and local data ownership central product requirements.",
              "Added Philippine context through peso formatting and familiar wallet and bank options.",
              "Used AI-assisted development to implement, test, debug, refine, and publish the application.",
              "Built a public landing page, installable web experience, sample-data screenshots, and open-source repository.",
            ].map((item, index) => (
              <Reveal
                className="case-list-item"
                delay={index * 0.035}
                key={item}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm sinkpeso-tech">
        <div className="shell sinkpeso-tech-grid">
          <Reveal>
            <p className="eyebrow">Technology</p>
            <h2>A browser-based app with local-first persistence.</h2>
          </Reveal>

          <Reveal className="sinkpeso-tech-cards" delay={0.08}>
            <div>
              <small>Interface</small>
              <strong>React / HTML / CSS / JavaScript</strong>
            </div>

            <div>
              <small>Storage</small>
              <strong>Browser storage / Local-first persistence</strong>
            </div>

            <div>
              <small>Capabilities</small>
              <strong>PWA / PDF reports / CSV import and export</strong>
            </div>

            <div>
              <small>Publishing</small>
              <strong>GitHub / GitHub Pages / Open source</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell lessons">
          <Reveal>
            <p className="eyebrow">What the project taught me</p>
            <h2>A useful personal tool must earn the habit.</h2>
          </Reveal>

          <div>
            {[
              "Privacy is not only a technical feature; it changes how comfortable people feel entering sensitive information.",
              "Fast daily actions matter more than adding every possible finance feature.",
              "Local-first products need clear export, recovery, and device-storage expectations.",
              "Building for Philippine users means respecting local currency, wallets, obligations, and financial language.",
            ].map((lesson) => (
              <Reveal className="lesson-card" key={lesson}>
                <p>{lesson}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .sinkpeso-case-v3 {
          --sp-green: #00b85e;
          --sp-green-soft: color-mix(in srgb, #00b85e 12%, transparent);
          --sp-blue-soft: color-mix(in srgb, #7190b2 18%, transparent);
        }

        .sinkpeso-hero {
          overflow: hidden;
          background:
            radial-gradient(circle at 84% 18%, var(--sp-green-soft), transparent 30%),
            radial-gradient(circle at 8% 92%, var(--sp-blue-soft), transparent 34%);
        }

        .sinkpeso-hero-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: clamp(48px, 7vw, 110px);
          align-items: center;
          margin-top: 36px;
        }

        .sinkpeso-open-label {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          margin-bottom: 26px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--surface);
          font-size: 12px;
          font-weight: 800;
        }

        .sinkpeso-hero-copy h1 {
          margin: 8px 0 10px;
          font-size: clamp(4.8rem, 10vw, 9.5rem);
          line-height: 0.82;
          letter-spacing: -0.075em;
        }

        .sinkpeso-tagline {
          margin: 22px 0;
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 3.2rem);
        }

        .sinkpeso-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 34px 0 42px;
        }

        .sinkpeso-preview-stage {
          min-height: 650px;
          display: grid;
          place-items: center;
          position: relative;
        }

        .sinkpeso-preview-glow {
          position: absolute;
          width: 68%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #00b85e;
          filter: blur(110px);
          opacity: 0.14;
        }

        .sinkpeso-browser {
          width: min(100%, 650px);
          aspect-ratio: 16 / 10;
          position: relative;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--line) 70%, white);
          border-radius: 28px;
          background: #050a14;
          box-shadow: 0 45px 120px rgba(0, 0, 0, 0.28);
          transform: rotate(2deg);
        }

        .sinkpeso-browser > img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          padding-top: 36px;
        }

        .sinkpeso-browser-bar {
          height: 36px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 14px;
          position: absolute;
          inset: 0 0 auto;
          z-index: 2;
          background: #0a0e1a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .sinkpeso-browser-bar span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.28);
        }

        .sinkpeso-privacy-chip {
          position: absolute;
          right: 4%;
          bottom: 13%;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          border-radius: 999px;
          background: #0b1611;
          color: #baffd6;
          border: 1px solid rgba(0, 184, 94, 0.28);
          font-size: 12px;
          font-weight: 800;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);
        }

        .sinkpeso-origin {
          border-block: 1px solid var(--line);
          background: linear-gradient(135deg, var(--sage-soft), var(--surface));
        }

        .sinkpeso-section-intro {
          max-width: 760px;
          color: var(--muted);
        }

        .sinkpeso-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 48px;
        }

        .sinkpeso-feature-card {
          min-height: 280px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .sinkpeso-feature-card svg {
          color: var(--sp-green);
        }

        .sinkpeso-feature-card h3 {
          margin-top: auto;
          margin-bottom: 10px;
        }

        .sinkpeso-feature-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
        }

        .sinkpeso-local {
          background: #070d12;
          color: #f5f7f6;
        }

        .sinkpeso-local-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: clamp(50px, 8vw, 130px);
          align-items: center;
        }

        .sinkpeso-local-copy {
          color: #a9b4ae;
        }

        .sinkpeso-local-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 14px;
          align-items: center;
        }

        .sinkpeso-local-flow > div {
          min-height: 150px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 15px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.045);
          text-align: center;
          font-weight: 800;
        }

        .sinkpeso-local-flow > div svg {
          color: #00e676;
        }

        .sinkpeso-local-flow > span {
          color: #7d8983;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .sinkpeso-decisions {
          margin-top: 46px;
          border-top: 1px solid var(--line);
        }

        .sinkpeso-decision {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 26px;
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .sinkpeso-decision > span {
          color: var(--sp-green);
          font-size: 11px;
          font-weight: 900;
        }

        .sinkpeso-decision h3 {
          margin: 0 0 8px;
        }

        .sinkpeso-decision p {
          max-width: 760px;
          margin: 0;
          color: var(--muted);
        }

        .sinkpeso-gallery-section {
          border-block: 1px solid var(--line);
          background:
            radial-gradient(circle at 10% 10%, var(--sp-green-soft), transparent 27%),
            color-mix(in srgb, var(--surface) 68%, var(--bg));
        }

        .sinkpeso-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-top: 48px;
        }

        .sinkpeso-screen {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .sinkpeso-screen-wide {
          grid-column: 1 / -1;
        }

        .sinkpeso-screen-image {
          aspect-ratio: 16 / 10;
          position: relative;
          overflow: hidden;
          background: #050a14;
          border-bottom: 1px solid var(--line);
        }

        .sinkpeso-screen-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        .sinkpeso-screen-copy {
          padding: 22px;
        }

        .sinkpeso-screen-copy p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 13px;
        }

        .sinkpeso-tech {
          border-block: 1px solid var(--line);
          background: linear-gradient(
            145deg,
            var(--sp-green-soft),
            var(--sp-blue-soft)
          );
        }

        .sinkpeso-tech-grid {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 70px;
        }

        .sinkpeso-tech-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .sinkpeso-tech-cards > div {
          min-height: 145px;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: color-mix(in srgb, var(--surface) 86%, transparent);
        }

        .sinkpeso-tech-cards small {
          display: block;
          color: var(--sp-green);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .sinkpeso-tech-cards strong {
          display: block;
          margin-top: 42px;
          font-size: 0.95rem;
        }

        @media (max-width: 1040px) {
          .sinkpeso-feature-grid {
            grid-template-columns: 1fr 1fr;
          }

          .sinkpeso-local-grid,
          .sinkpeso-tech-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .sinkpeso-hero-grid,
          .sinkpeso-gallery {
            grid-template-columns: 1fr;
          }

          .sinkpeso-hero-copy h1 {
            font-size: clamp(4.4rem, 24vw, 7rem);
          }

          .sinkpeso-preview-stage {
            min-height: 400px;
          }

          .sinkpeso-browser {
            width: 100%;
            border-radius: 20px;
            transform: none;
          }

          .sinkpeso-privacy-chip {
            right: 12px;
            bottom: 2%;
          }

          .sinkpeso-feature-grid,
          .sinkpeso-tech-cards {
            grid-template-columns: 1fr;
          }

          .sinkpeso-local-flow {
            grid-template-columns: 1fr;
          }

          .sinkpeso-local-flow > span {
            text-align: center;
          }

          .sinkpeso-decision {
            grid-template-columns: 42px 1fr;
            gap: 16px;
          }

          .sinkpeso-screen-wide {
            grid-column: auto;
          }
        }
      `}</style>
    </article>
  );
}
