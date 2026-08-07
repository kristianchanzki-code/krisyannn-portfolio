import type { Metadata } from "next";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Experience and Resume",
  description:
    "Kristian Bailo - Operations & Administrative Support | Virtual Assistant.",
};

const responsibilities = [
  "Maintain records for POS devices, portable printers, SIM cards, booth assignments, replacements, returns, and repairs.",
  "Receive and deploy equipment to supervisors and field locations while keeping assignment records current.",
  "Process device and printer replacements and coordinate defective assets with technicians and operations.",
  "Monitor asset availability, custody, repair status, deployment status, and assignment history.",
  "Prepare operational documentation and improve recurring workflows that previously depended on separate files and follow-ups.",
];

const strengths = [
  "Administrative support",
  "Records and data organization",
  "Coordination and follow-up",
  "Operations support",
  "SOP and documentation",
  "Workflow mapping",
  "Process improvement",
  "User acceptance testing",
  "Implementation support",
  "AI-assisted work",
];

const tools = [
  "React / TypeScript",
  "NestJS / Prisma",
  "Supabase",
  "Git / GitHub",
  "Railway / Vercel",
  "PowerShell",
];

export default function ExperiencePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar no-print">
        <p>This page is designed to print cleanly as a one-page PDF.</p>

        <PrintButton />
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-eyebrow">
              Operations / Administrative Support / Virtual Assistance
            </p>

            <h1>Kristian Bailo</h1>

            <p className="resume-title">
              Operations &amp; Administrative Support | Virtual Assistant
            </p>
          </div>

          <div className="resume-contact">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={14} />
              {siteConfig.email}
            </a>

            <span>
              <MapPin size={14} />
              {siteConfig.location}
            </span>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={14} />
              GitHub
            </a>
          </div>
        </header>

        <section className="resume-section resume-profile">
          <h2>Profile</h2>

          <p>
            Operations professional with 2+ years of hands-on experience
            supporting records, coordination, replacements, returns, repair
            follow-ups, documentation, and day-to-day administrative work. I
            am comfortable organizing information, keeping records accurate,
            coordinating with different people, following up on pending work,
            learning new tools, and helping make routine processes clearer and
            more organized. I am now expanding into virtual assistance and
            freelance support, while remaining open to operations,
            administrative, back-office, documentation, QA/UAT,
            implementation, and other support roles where these skills are
            useful.
          </p>
        </section>

        <section className="resume-section">
          <div className="resume-section-heading">
            <h2>Experience</h2>
          </div>

          <div className="resume-role">
            <div className="resume-role-heading">
              <div>
                <h3>Operations Staff</h3>
                <p>BLACKMING</p>
              </div>

              <strong>2 years and 6 months</strong>
            </div>

            <ul>
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Selected Projects</h2>

          <div className="resume-projects">
            <article>
              <div className="resume-project-heading">
                <h3>BLACKMING PAMS</h3>
                <Link className="no-print" href="/projects/pams">
                  Case study
                  <ArrowUpRight size={13} />
                </Link>
              </div>

              <strong>
                Product owner, operations domain expert, and AI-assisted builder
              </strong>

              <p>
                Designed and built an internal POS Asset Management System
                around real field workflows for registration, deployment,
                replacement, returns, repairs, custody, history, reporting,
                and role-aware operations.
              </p>
            </article>

            <article>
              <div className="resume-project-heading">
                <h3>SINKPESO</h3>
                <Link className="no-print" href="/projects/sinkpeso">
                  Case study
                  <ArrowUpRight size={13} />
                </Link>
              </div>

              <strong>Product designer and AI-assisted builder</strong>

              <p>
                Built and published a privacy-first, offline personal finance
                web app for Filipinos covering expenses, wallets, bills,
                savings, recurring entries, reports, search, and local data
                ownership.
              </p>
            </article>
          </div>
        </section>

        <section className="resume-section resume-bottom-grid">
          <div>
            <h2>Core Skills</h2>

            <div className="resume-tags">
              {strengths.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h2>Tools &amp; Platforms I Have Worked With</h2>

            <div className="resume-tags">
              {tools.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </article>

      <style>{`
        .resume-page {
          min-height: 100vh;
          padding: 42px 20px 70px;
          background:
            radial-gradient(circle at 12% 0%, var(--sage-soft), transparent 28%),
            radial-gradient(circle at 88% 0%, var(--amber-soft), transparent 28%),
            var(--bg);
        }

        .resume-toolbar {
          width: min(960px, 100%);
          margin: 0 auto 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .resume-toolbar p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
        }

        .resume-print-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--surface);
          color: var(--text);
          font: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: var(--shadow);
        }

        .resume-sheet {
          width: min(960px, 100%);
          min-height: 1120px;
          margin: 0 auto;
          padding: 54px 62px;
          color: #191816;
          background: #fffefa;
          border: 1px solid rgba(25, 24, 22, 0.12);
          box-shadow: 0 30px 80px rgba(30, 25, 18, 0.14);
        }

        .resume-header {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 40px;
          align-items: end;
          padding-bottom: 24px;
          border-bottom: 1.5px solid #24211d;
        }

        .resume-eyebrow {
          margin: 0 0 10px;
          color: #b96912;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .resume-header h1 {
          margin: 0;
          font-size: clamp(2.4rem, 5vw, 4.1rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 500;
        }

        .resume-title {
          margin: 10px 0 0;
          font-size: 13px;
          font-weight: 700;
        }

        .resume-contact {
          display: grid;
          gap: 8px;
          justify-items: start;
          font-size: 11px;
        }

        .resume-contact a,
        .resume-contact span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #35312c;
          text-decoration: none;
        }

        .resume-section {
          padding: 22px 0;
          border-bottom: 1px solid rgba(25, 24, 22, 0.16);
        }

        .resume-section:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .resume-section h2 {
          margin: 0 0 12px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .resume-profile p {
          max-width: 790px;
          margin: 0;
          color: #413c35;
          font-size: 11.5px;
          line-height: 1.62;
        }

        .resume-role-heading,
        .resume-project-heading {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: baseline;
        }

        .resume-role-heading h3,
        .resume-project-heading h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 650;
        }

        .resume-role-heading p {
          margin: 3px 0 0;
          color: #666057;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .resume-role-heading > strong {
          white-space: nowrap;
          font-size: 10px;
        }

        .resume-role ul {
          margin: 12px 0 0;
          padding-left: 18px;
          color: #403a34;
          font-size: 10.5px;
          line-height: 1.5;
        }

        .resume-role li + li {
          margin-top: 3px;
        }

        .resume-projects {
          display: grid;
          gap: 16px;
        }

        .resume-projects article + article {
          padding-top: 16px;
          border-top: 1px solid rgba(25, 24, 22, 0.12);
        }

        .resume-project-heading a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #191816;
          font-size: 10px;
          font-weight: 800;
          text-decoration: none;
        }

        .resume-projects article > strong {
          display: block;
          margin-top: 4px;
          font-size: 10.5px;
        }

        .resume-projects article > p {
          margin: 6px 0 0;
          color: #4d473f;
          font-size: 10.5px;
          line-height: 1.5;
        }

        .resume-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
        }

        .resume-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .resume-tags span {
          padding: 6px 8px;
          border: 1px solid rgba(25, 24, 22, 0.16);
          border-radius: 999px;
          color: #3f3932;
          background: #faf7ef;
          font-size: 9.5px;
          font-weight: 700;
        }

        @media (max-width: 760px) {
          .resume-page {
            padding: 24px 10px 50px;
          }

          .resume-toolbar {
            align-items: flex-start;
          }

          .resume-toolbar p {
            max-width: 220px;
          }

          .resume-sheet {
            min-height: auto;
            padding: 34px 24px;
          }

          .resume-header,
          .resume-bottom-grid {
            grid-template-columns: 1fr;
          }

          .resume-header {
            gap: 22px;
          }

          .resume-contact {
            grid-template-columns: 1fr;
          }

          .resume-role-heading {
            align-items: flex-start;
          }
        }

        @media print {
          @page {
            size: A4;
            margin: 8mm;
          }

          html,
          body {
            background: white !important;
          }

          .no-print,
          header:has(nav),
          nav,
          footer {
            display: none !important;
          }

          .resume-page {
            min-height: 0;
            padding: 0;
            background: white !important;
          }

          .resume-sheet {
            width: 100%;
            min-height: 0;
            margin: 0;
            padding: 8mm 10mm;
            border: 0;
            box-shadow: none;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .resume-header {
            grid-template-columns: 1.25fr 0.75fr;
            gap: 7mm;
            align-items: end;
            padding-bottom: 5mm;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-header h1 {
            font-size: 30pt;
          }

          .resume-section {
            padding: 4mm 0;
          }

          .resume-section h2 {
            margin-bottom: 2mm;
          }

          .resume-profile p,
          .resume-role ul,
          .resume-projects article > p {
            font-size: 8.6pt;
          }

          .resume-profile p {
            line-height: 1.55;
          }

          .resume-role {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-role ul {
            margin-top: 2.5mm;
            line-height: 1.45;
          }

          .resume-role li + li {
            margin-top: 0.7mm;
          }

          .resume-projects {
            gap: 2.5mm;
          }

          .resume-projects article {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-projects article + article {
            padding-top: 2.5mm;
          }

          .resume-projects article > strong,
          .resume-projects article > p {
            font-size: 8.3pt;
          }

          .resume-projects article > p {
            margin-top: 1.4mm;
            line-height: 1.45;
          }

          .resume-bottom-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8mm;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-tags {
            gap: 1.5mm;
          }

          .resume-tags span {
            padding: 1.2mm 2mm;
            font-size: 8pt;
            line-height: 1.1;
          }
        }
      `}</style>
    </main>
  );
}
