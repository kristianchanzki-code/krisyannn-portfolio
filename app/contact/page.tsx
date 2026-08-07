import type { Metadata } from "next";
import { GitBranch, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kristian Bailo about remote operations, administrative support, coordination, documentation, implementation support, QA/UAT, or practical technology work.",
};

export default function ContactPage() {
  return (
    <section className="section-pad page-hero">
      <div className="shell contact-grid">
        <Reveal>
          <p className="eyebrow">Let&apos;s talk</p>

          <h1>Tell me what needs to work better.</h1>

          <p className="page-lead">
            I&apos;m open to remote opportunities across operations,
            administrative and back-office support, coordination,
            documentation, implementation support, testing / QA/UAT, and
            practical technology work.
          </p>

          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail />
              <span>
                <small>Email</small>
                {siteConfig.email}
              </span>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch />
              <span>
                <small>GitHub</small>
                View projects and code
              </span>
            </a>

            <div>
              <MapPin />
              <span>
                <small>Location</small>
                {siteConfig.location} | Remote-friendly
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact-panel" delay={0.08}>
          <div className="field-note">
            <span>Good starting point</span>
            <p>
              What is happening now, what should happen instead, and who is
              affected?
            </p>
          </div>

          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
