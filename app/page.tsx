import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Headphones,
  MessageSquareText,
} from "lucide-react";

import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkbenchVisual } from "@/components/workbench-visual";

import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

const capabilities = [
  { icon: Database, title: "Asset & records tracking", text: "Device, SIM, printer, assignment, return, and repair records grounded in daily operations." },
  { icon: Headphones, title: "Operational coordination", text: "Keeping handoffs, pending actions, replacements, and repair follow-ups visible." },
  { icon: FileText, title: "Workflow documentation", text: "Turning recurring procedures into clear records, instructions, and repeatable steps." },
  { icon: ClipboardCheck, title: "Practical digital tools", text: "Mapping real workflows into useful tools, then testing them against day-to-day scenarios." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="shell hero-grid">
          <Reveal className="hero-copy">

            <p className="eyebrow">{siteConfig.title}</p>
            <h1>I turn messy operations into <em>clearer systems.</em></h1>
            <p className="hero-lead">
              I&apos;m Kristian Bailo, an operations professional who builds practical digital tools.
              After 2+ years managing equipment, records, assignments, returns, and repairs, I
              started creating systems to make that work easier to track and improve.
              I&apos;m open to opportunities where I can contribute, grow, and keep learning,
              while building practical skills with AI tools.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#work">See what I&apos;ve built <ArrowDownRight size={18} /></Link>
              <Link className="button button-secondary" href="/contact">Contact me <MessageSquareText size={18} /></Link>
            </div>
            <div className="hero-proof">
              <span><BriefcaseBusiness size={17} /> 2+ years in operations</span>
              <span><CheckCircle2 size={17} /> Built from real workflows</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}><WorkbenchVisual /></Reveal>
        </div>
      </section>


      <section className="section-pad">
        <div className="shell split-intro">
          <Reveal>
            <SectionHeading
              eyebrow="My starting point"
              title="Operations taught me where systems break."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="long-copy">
              <p>
                For 2 years and 6 months at BLACKMING, I&apos;ve worked around the real movement of
                POS devices, printers, SIM cards, assignments, replacements, returns, and repairs.
              </p>
              <p>
                That work taught me to notice missing information, unclear ownership, repeated
                follow-ups, and processes that depend too much on memory. PAMS grew from that reality.
              </p>
              <Link className="text-link" href="/about">Read my story <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="experience-section section-pad-sm">
        <div className="shell experience-card">
          <Reveal className="experience-copy">
            <p className="eyebrow">Work experience</p>
            <h2>{experience.role}</h2>
            <p className="experience-company">{experience.company} / {experience.duration}</p>
            <p>{experience.summary}</p>
            <Link className="text-link" href="/resume">View responsibilities and experience <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal className="workflow" delay={0.1}>
            {experience.workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < experience.workflow.length - 1 ? <ArrowDownRight aria-hidden="true" /> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="work" className="section-pad">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="From the workbench"
              title="Two products, both built from lived problems."
              description="The case studies show initiative, problem solving, and an understanding of real workflows. Technology is the supporting tool."
            />
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section section-pad">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="How I can help"
              title="What I bring to a team or project."
            />
          </Reveal>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="capability-card" delay={index * 0.04} key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="section-pad-sm">
        <div className="shell contact-cta">
          <div>
            <p className="eyebrow">Open to a good fit</p>
            <h2>Have an operational workflow that needs a clearer system?</h2>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
