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
  { icon: BriefcaseBusiness, title: "Administrative support", text: "Keeping routine work, records, and follow-ups clear and dependable." },
  { icon: Database, title: "Records and data organization", text: "Maintaining accurate asset, assignment, status, and custody information." },
  { icon: Map, title: "Workflow and process improvement", text: "Turning real tasks, handoffs, and recurring issues into a clearer process." },
  { icon: FileText, title: "SOPs and documentation", text: "Explaining technical workflows in language teams can follow." },
  { icon: Headphones, title: "Coordination and implementation", text: "Helping users, supervisors, technicians, and operations stay aligned." },
  { icon: ClipboardCheck, title: "Testing and practical tech", text: "Testing workflows and using AI tools carefully to build useful solutions." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="shell hero-grid">
          <Reveal className="hero-copy">
            <div className="availability-pill"><span /> {siteConfig.availability}</div>
            <p className="eyebrow">{siteConfig.title}</p>
            <h1>I build useful digital tools for <em>real everyday problems.</em></h1>
            <p className="hero-lead">
              I&apos;m Kristian Bailo. I combine hands-on operations and administrative experience
              with product thinking and AI-assisted building to keep information clear, coordinate
              work, and make everyday processes more organized.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></Link>
              <Link className="button button-secondary" href="/contact">Let&apos;s talk <MessageSquareText size={18} /></Link>
            </div>
            <div className="hero-proof">
              <span><BriefcaseBusiness size={17} /> 2 years and 6 months in operations</span>
              <span><CheckCircle2 size={17} /> 2 featured products</span>
              <span><Sparkles size={17} /> Built while learning</span>
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
              description="The technology matters, but the case studies focus on the decisions, workflows, and people behind it."
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
              eyebrow="Where I can contribute"
              title="Useful work at the intersection of people, process, and technology."
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
            <p className="eyebrow">The path so far</p>
            <h2>Still learning. Already building.</h2>
          </Reveal>
          <Reveal className="path-row" delay={0.08}>
            {["Operations work", "Administrative support", "Process improvement", "AI-assisted building", "PAMS + SINKPESO", "Remote operations and support"].map((item, index) => (
              <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="shell contact-cta">
          <div>
            <p className="eyebrow">Open to a good fit</p>
            <h2>Have a process, records, project, or role that needs practical support?</h2>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
