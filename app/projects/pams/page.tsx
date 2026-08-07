import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getProject } from "@/content/projects";

const project = getProject("pams")!;

export const metadata: Metadata = {
  title: "PAMS Case Study",
  description:
    "How Kristian Bailo translated hands-on operations experience into a private POS asset-management system for field operations.",
};

const workflow = [
  {
    number: "01",
    title: "Register",
    text: "Create a clear record for devices, portable printers, SIM cards, booths, and supervisors.",
  },
  {
    number: "02",
    title: "Deploy",
    text: "Assign eligible assets to the correct booth while respecting operational boundaries and current status.",
  },
  {
    number: "03",
    title: "Replace",
    text: "Move the active assignment to a replacement while preserving what happened to the previous asset.",
  },
  {
    number: "04",
    title: "Return and repair",
    text: "Track physical returns, diagnosis, repair progress, completion, and retirement recommendations.",
  },
  {
    number: "05",
    title: "Review history",
    text: "See current custody and past movements without reconstructing the story from separate files and messages.",
  },
];

const screens = [
  {
    src: "/project-screenshots/pams/01-dashboard.webp",
    alt: "Anonymized PAMS operations dashboard",
    title: "Operations dashboard",
    description:
      "A single overview for inventory, deployment, booth coverage, returns, repairs, and items that need attention.",
    className: "pams-shot-wide",
  },
  {
    src: "/project-screenshots/pams/02-device-inventory.webp",
    alt: "Anonymized PAMS device inventory",
    title: "Device inventory",
    description:
      "Searchable asset records with operational status, assignment context, timeline access, and management actions.",
    className: "pams-shot-wide",
  },
  {
    src: "/project-screenshots/pams/03-booth-360-overview.webp",
    alt: "Anonymized Booth 360 overview",
    title: "Booth 360",
    description:
      "A focused view of the current device, printer, SIM, supervisor, and available booth-level actions.",
    className: "pams-shot-tall",
  },
  {
    src: "/project-screenshots/pams/04-booth-360-history.webp",
    alt: "Anonymized Booth 360 history",
    title: "Preserved history",
    description:
      "Assignments, replacements, and supervisor changes remain visible as a readable operational timeline.",
    className: "pams-shot-tall",
  },
  {
    src: "/project-screenshots/pams/05-device-replacement.webp",
    alt: "Anonymized PAMS device replacement workflow",
    title: "Replacement workflow",
    description:
      "The destination of the removed device is explicit: awaiting return, supervisor spare, or received for repair.",
    className: "pams-shot-tall",
  },
  {
    src: "/project-screenshots/pams/06-repairs.webp",
    alt: "Anonymized PAMS repair monitoring page",
    title: "Repair monitoring",
    description:
      "Repair tickets can be followed from intake and diagnosis through completion or retirement recommendation.",
    className: "pams-shot-wide",
  },
];

export default function PamsPage() {
  return (
    <article className="case-study pams-case-v2">
      <header className="case-hero section-pad">
        <div className="shell">
          <Link className="back-link" href="/#work">
            <ArrowLeft size={17} />
            Back to selected work
          </Link>

          <Reveal className="case-title">
            <div className="pams-private-label">
              <ShieldCheck size={16} />
              Private internal system
            </div>

            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.name}</h1>
            <p className="case-tagline">{project.tagline}</p>

            <p className="page-lead">
              A working asset-management system shaped by my experience
              supporting POS devices, portable printers, SIM cards,
              supervisors, booths, replacements, returns, and repairs across
              hundreds of field locations.
            </p>

            <div className="case-meta">
              <div>
                <small>My role</small>
                <strong>
                  Product owner, operations domain expert, and AI-assisted
                  builder
                </strong>
              </div>

              <div>
                <small>Public access</small>
                <strong>
                  Anonymized screenshots | Production system and source kept private
                </strong>
              </div>
            </div>
          </Reveal>

          <Reveal className="pams-hero-shot" delay={0.08}>
            <Image
              src="/project-screenshots/pams/01-dashboard.webp"
              alt="Anonymized PAMS operations dashboard"
              width={1885}
              height={989}
              sizes="(max-width: 760px) 94vw, 1200px"
              priority
            />
            <p>
              Real interface shown with operational identifiers and exact
              internal figures obscured.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section-pad-sm">
        <div className="shell case-grid">
          <Reveal>
            <p className="eyebrow">The operational problem</p>
            <h2>The current status was visible. The full story was not.</h2>
          </Reveal>

          <Reveal className="long-copy" delay={0.08}>
            <p>
              A POS asset can move through registration, deployment,
              replacement, field return, office custody, repair, redeployment,
              and retirement. Each handoff creates information that someone
              needs later.
            </p>

            <p>
              When records are split between spreadsheets, chat messages, and
              individual memory, teams spend time asking who has the asset,
              what happened before, and what action should happen next. PAMS
              was designed to keep that lifecycle connected.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad-sm pams-origin-section">
        <div className="shell pams-origin-grid">
          <Reveal>
            <p className="eyebrow">Where it came from</p>
            <h2>I did not start by choosing a technology stack.</h2>
          </Reveal>

          <Reveal className="pams-origin-copy" delay={0.08}>
            <p>
              I started with the process I already handled at BLACKMING:
              receiving equipment, updating records, assigning assets,
              replacing defective units, coordinating repairs, and following
              up on returns.
            </p>

            <p>
              That experience helped me define the business rules, edge cases,
              user roles, interface decisions, and accountability history that
              the system needed.
            </p>
          </Reveal>

          <Reveal className="pams-scale-note" delay={0.12}>
            <span>Operational scale</span>
            <strong>Hundreds of field locations and assets</strong>
            <p>
              Exact internal figures are intentionally not published in this
              portfolio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">The connected workflow</p>
            <h2>Each action updates the present without erasing the past.</h2>
          </Reveal>

          <div className="pams-workflow">
            {workflow.map((step, index) => (
              <Reveal
                className="pams-workflow-step"
                delay={index * 0.04}
                key={step.number}
              >
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="shell case-feature-grid">
          <Reveal className="case-feature">
            <GitBranch />
            <h3>Workflow first</h3>
            <p>
              Registration, deployment, replacement, return, repair,
              transfer, and retirement are connected lifecycle events.
            </p>
          </Reveal>

          <Reveal className="case-feature" delay={0.04}>
            <Database />
            <h3>History preserved</h3>
            <p>
              Assignments and movements remain visible so a current state does
              not erase previous responsibility or context.
            </p>
          </Reveal>

          <Reveal className="case-feature" delay={0.08}>
            <ShieldCheck />
            <h3>Operational rules</h3>
            <p>
              Role access, area boundaries, asset eligibility, and status
              transitions reduce invalid or ambiguous actions.
            </p>
          </Reveal>

          <Reveal className="case-feature" delay={0.12}>
            <Layers3 />
            <h3>Working delivery</h3>
            <p>
              The system combines a responsive interface, API, database,
              authentication, audit history, and cloud deployment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pams-gallery-section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Inside the product</p>
            <h2>The interface follows the operational lifecycle.</h2>
            <p className="pams-gallery-intro">
              These are real PAMS screens. Names, booth identifiers, serials,
              asset numbers, exact totals, and operational records have been
              obscured for this public case study.
            </p>
          </Reveal>

          <div className="pams-gallery">
            {screens.slice(1).map((screen, index) => (
              <Reveal
                className={`pams-gallery-card ${screen.className}`}
                delay={(index % 3) * 0.04}
                key={screen.src}
              >
                <div className="pams-gallery-image">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.className === "pams-shot-wide" ? 1861 : 704}
                    height={screen.className === "pams-shot-wide" ? 983 : 983}
                    sizes={
                      screen.className === "pams-shot-wide"
                        ? "(max-width: 760px) 94vw, 1200px"
                        : "(max-width: 760px) 94vw, 360px"
                    }
                  />
                </div>

                <figcaption>
                  <strong>{screen.title}</strong>
                  <p>{screen.description}</p>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">What I contributed</p>
            <h2>
              My role connected operational knowledge to product decisions.
            </h2>
          </Reveal>

          <div className="case-list">
            {[
              "Identified the operational problem and proposed a centralized system.",
              "Mapped the real asset lifecycle, handoffs, exceptions, and accountability requirements.",
              "Defined business rules for assignments, replacements, field returns, repair, and retirement.",
              "Reviewed interface decisions from the perspective of Operations Staff and other internal roles.",
              "Used AI-assisted development tools to implement, test, troubleshoot, and iterate on the product.",
              "Deployed the frontend, backend, database, authentication, and production infrastructure.",
              "Prepared adoption materials, hosting proposals, and operating procedures for internal use.",
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

      <section className="section-pad-sm pams-tech-section">
        <div className="shell pams-tech-grid">
          <Reveal>
            <p className="eyebrow">Technology</p>
            <h2>A full-stack system, chosen to support the workflow.</h2>
          </Reveal>

          <Reveal className="pams-tech-list" delay={0.08}>
            <div>
              <small>Frontend</small>
              <strong>React / Vite / TypeScript</strong>
            </div>
            <div>
              <small>Backend</small>
              <strong>NestJS / Prisma</strong>
            </div>
            <div>
              <small>Data and authentication</small>
              <strong>Supabase PostgreSQL / Supabase Auth</strong>
            </div>
            <div>
              <small>Deployment</small>
              <strong>Vercel / Railway / GitHub</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="privacy-section section-pad-sm">
        <div className="shell case-grid">
          <Reveal>
            <p className="eyebrow">Portfolio privacy</p>
            <h2>Show the product. Protect the operation.</h2>
          </Reveal>

          <Reveal className="privacy-checks" delay={0.08}>
            {[
              "The production application is not linked publicly.",
              "The source repository is not linked from the case study.",
              "Employee and supervisor names are removed.",
              "Booth codes, serials, SIM details, and asset identifiers are obscured.",
              "Exact operational totals are replaced by broad scale descriptions.",
              "No credentials, tokens, or internal service URLs are published.",
            ].map((item) => (
              <p key={item}>
                <CheckCircle2 size={18} />
                {item}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell lessons">
          <Reveal>
            <p className="eyebrow">What the project taught me</p>
            <h2>Technology follows the workflow, not the other way around.</h2>
          </Reveal>

          <div>
            {[
              "A useful internal tool must match the workflow people actually perform, including exceptions.",
              "Status labels are not enough; teams also need custody, history, ownership, and the next required action.",
              "AI can accelerate implementation, but domain knowledge still determines whether the product is correct.",
              "Building the system exposed process questions that were previously hidden inside manual work.",
            ].map((lesson) => (
              <Reveal className="lesson-card" key={lesson}>
                <p>{lesson}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .pams-case-v2 .case-title {
          max-width: 980px;
        }

        .pams-private-label {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 28px 0 22px;
          padding: 9px 12px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--sage-soft);
          font-size: 12px;
          font-weight: 800;
        }

        .pams-hero-shot {
          margin-top: 70px;
          padding: clamp(12px, 2vw, 24px);
          border: 1px solid var(--line);
          border-radius: 34px;
          background:
            radial-gradient(circle at 85% 20%, var(--amber-soft), transparent 44%),
            var(--surface);
          box-shadow: var(--shadow);
        }

        .pams-hero-shot img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 22px;
          border: 1px solid color-mix(in srgb, var(--line) 75%, transparent);
        }

        .pams-hero-shot p {
          margin: 14px 4px 0;
          color: var(--muted);
          font-size: 12px;
        }

        .pams-origin-section {
          background:
            radial-gradient(circle at 0% 10%, var(--sage-soft), transparent 36%),
            radial-gradient(circle at 100% 10%, var(--amber-soft), transparent 36%);
          border-block: 1px solid var(--line);
        }

        .pams-origin-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.1fr 0.72fr;
          gap: clamp(34px, 5vw, 76px);
          align-items: start;
        }

        .pams-origin-copy p,
        .pams-gallery-intro {
          color: var(--muted);
        }

        .pams-origin-copy p:first-child {
          margin-top: 0;
        }

        .pams-scale-note {
          padding: 26px;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          box-shadow: var(--shadow);
        }

        .pams-scale-note span,
        .pams-tech-list small {
          display: block;
          color: var(--amber);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pams-scale-note strong {
          display: block;
          margin-top: 50px;
          font-family: var(--font-serif);
          font-size: 1.8rem;
          line-height: 1.08;
        }

        .pams-scale-note p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 12px;
        }

        .pams-workflow {
          margin-top: 48px;
          border-top: 1px solid var(--line);
        }

        .pams-workflow-step {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 26px;
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .pams-workflow-step > span {
          color: var(--amber);
          font-size: 11px;
          font-weight: 900;
        }

        .pams-workflow-step h3 {
          margin: 0 0 8px;
          font-size: 1.15rem;
        }

        .pams-workflow-step p {
          max-width: 760px;
          margin: 0;
          color: var(--muted);
        }

        .pams-gallery-section {
          background: color-mix(in srgb, var(--surface) 68%, var(--bg));
          border-block: 1px solid var(--line);
        }

        .pams-gallery-intro {
          max-width: 760px;
        }

        .pams-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 50px;
        }

        .pams-gallery-card {
          margin: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .pams-shot-wide {
          grid-column: 1 / -1;
        }

        .pams-gallery-image {
          padding: 14px;
          background:
            radial-gradient(circle at 85% 15%, var(--amber-soft), transparent 42%),
            color-mix(in srgb, var(--bg) 76%, var(--surface));
          border-bottom: 1px solid var(--line);
        }

        .pams-gallery-image img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
        }

        .pams-shot-tall .pams-gallery-image {
          display: grid;
          place-items: center;
          min-height: 620px;
        }

        .pams-shot-tall img {
          width: auto;
          max-width: 100%;
          max-height: 590px;
        }

        .pams-gallery-card figcaption {
          padding: 22px;
        }

        .pams-gallery-card figcaption strong {
          font-size: 1rem;
        }

        .pams-gallery-card figcaption p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 13px;
        }

        .pams-tech-section {
          background:
            linear-gradient(145deg, var(--sage-soft), var(--amber-soft));
          border-block: 1px solid var(--line);
        }

        .pams-tech-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 70px;
        }

        .pams-tech-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .pams-tech-list > div {
          min-height: 145px;
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: color-mix(in srgb, var(--surface) 86%, transparent);
        }

        .pams-tech-list strong {
          display: block;
          margin-top: 44px;
          font-size: 0.95rem;
        }

        @media (max-width: 980px) {
          .pams-origin-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pams-scale-note {
            grid-column: 1 / -1;
          }

          .pams-gallery {
            grid-template-columns: 1fr 1fr;
          }

          .pams-shot-wide {
            grid-column: 1 / -1;
          }

          .pams-tech-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .pams-hero-shot {
            margin-top: 46px;
            border-radius: 24px;
          }

          .pams-hero-shot img {
            border-radius: 14px;
          }

          .pams-origin-grid,
          .pams-gallery,
          .pams-tech-list {
            grid-template-columns: 1fr;
          }

          .pams-scale-note,
          .pams-shot-wide {
            grid-column: auto;
          }

          .pams-workflow-step {
            grid-template-columns: 42px 1fr;
            gap: 16px;
          }

          .pams-shot-tall .pams-gallery-image {
            min-height: auto;
          }

          .pams-shot-tall img {
            width: 100%;
            max-height: none;
          }
        }
      `}</style>
    </article>
  );
}
