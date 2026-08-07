import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Headphones,
  Map,
  MessageSquareText,
  Sparkles,
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
  { icon: BriefcaseBusiness, title: "Administrative Support", text: "Keeping routine work, information, and follow-ups organized." },
  { icon: Database, title: "Records & Data Organization", text: "Maintaining accurate records, spreadsheets, databases, status information, and organized files." },
  { icon: Headphones, title: "Coordination & Follow-up", text: "Helping tasks move between people without getting lost and keeping pending work visible." },
  { icon: FileText, title: "Documentation & SOPs", text: "Turning recurring tasks and workflows into clear instructions and organized documentation." },
  { icon: Map, title: "Operations Support", text: "Tracking workflows, assets, requests, status, custody, returns, repairs, and pending actions." },
  { icon: ClipboardCheck, title: "Digital Tools & QA", text: "Learning business tools, testing websites and workflows, documenting issues, and using AI thoughtfully to support the work." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="shell hero-grid">
          <Reveal className="hero-copy">
            <div className="availability-pill"><span /> {siteConfig.availability}</div>
            <p className="eyebrow">{siteConfig.title}</p>
            <h1>I help keep work <em>organized, clear, and moving.</em></h1>
            <p className="hero-lead">
              I&apos;m Kristian Bailo. I have 2+ years of hands-on operations experience with records,
              coordination, documentation, follow-ups, asset tracking, and day-to-day support. I&apos;m
              now expanding into virtual assistance and freelance work, where I can apply those
              skills while continuing to learn new tools and responsibilities.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></Link>
              <Link className="button button-secondary" href="/contact">Let&apos;s talk <MessageSquareText size={18} /></Link>
            </div>
            <div className="hero-proof">
              <span><BriefcaseBusiness size={17} /> 2 years and 6 months in operations</span>
              <span><CheckCircle2 size={17} /> Reliable support + organization</span>
              <span><Sparkles size={17} /> Always learning</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}><WorkbenchVisual /></Reveal>
        </div>
      </section>

      <section className="story-strip">
        <div className="shell story-strip-grid">
          <p className="quote-mark">&ldquo;</p>
          <p>I started with the problem, not the code.</p>
          <span>That is still how I build.</span>
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
              title="Reliable support for work that needs to stay organized."
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

      <section className="section-pad">
        <div className="shell learning-path">
          <Reveal>
            <p className="eyebrow">Skills I&apos;m growing into</p>
            <h2>Comfortable learning new tools, workflows, and responsibilities as the work requires.</h2>
          </Reveal>
          <Reveal className="path-row" delay={0.08}>
            {["Google Workspace", "Advanced spreadsheets", "Notion / task tools", "CRM fundamentals", "Basic website updates", "Workflow automation basics"].map((item, index) => (
              <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="shell contact-cta">
          <div>
            <p className="eyebrow">Open to a good fit</p>
            <h2>Need reliable support keeping work organized and moving?</h2>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
