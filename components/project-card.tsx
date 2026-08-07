import { ArrowUpRight, ExternalLink, LockKeyhole, MonitorCog, WalletCards } from "lucide-react";
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
      <div className="project-preview" aria-hidden="true">
        <div className="preview-window">
          <div className="preview-top"><i /><i /><i /></div>
          {pams ? (
            <div className="pams-preview">
              <aside><MonitorCog size={22} /><i /><i /><i /><i /></aside>
              <main>
                <span>Asset overview</span>
                <div className="preview-metrics"><b>Tracked</b><b>Available</b><b>Repair</b></div>
                <div className="preview-table"><i /><i /><i /><i /></div>
              </main>
            </div>
          ) : (
            <div className="sink-preview">
              <div className="wallet-head"><WalletCards size={22} /><span>August balance</span></div>
              <strong>₱ ••,•••</strong>
              <div className="budget-bars"><i /><i /><i /></div>
              <div className="privacy-note"><LockKeyhole size={15} /> Stored on your device</div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
