import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const pams = project.slug === "pams";

  return (
    <article className={`project-card project-${project.slug}`}>
      <div className="project-card-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p>{project.description}</p>
        <div className="chip-row">
          {project.accents.map((accent) => <span key={accent}>{accent}</span>)}
        </div>
        <div className="project-links">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Read the case study <ArrowUpRight size={18} />
          </Link>
          {pams ? (
            <a
              className="text-link project-live-link"
              href="https://pams-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PAMS <ExternalLink size={17} />
            </a>
          ) : null}
        </div>
      </div>
      <div className="project-preview">
        <div className="preview-window screenshot-window">
          <Image
            src={pams ? "/project-screenshots/pams/01-dashboard.webp" : "/project-screenshots/sinkpeso/dashboard.png"}
            alt={pams ? "PAMS asset management dashboard" : "SINKPESO budgeting dashboard"}
            width={pams ? 1901 : 1440}
            height={pams ? 988 : 1000}
            className="project-screenshot"
          />
        </div>
      </div>
    </article>
  );
}
