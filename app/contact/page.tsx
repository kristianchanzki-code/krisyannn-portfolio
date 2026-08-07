import type { Metadata } from "next";
import { GitBranch, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kristian Bailo about virtual assistance, freelance projects, administrative support, operations support, documentation, QA/UAT, or practical digital work.",
};

export default function ContactPage() {
  return (
    <section className="section-pad page-hero">
      <div className="shell contact-grid">
        <Reveal>
          <p className="eyebrow">Let&apos;s talk</p>

          <h1>Tell me what needs to work better.</h1>

          <p className="page-lead">
            I&apos;m open to VA work, freelance projects, and administrative,
            back-office, or operations support. If you need help organizing
            records or data, following up on tasks, documenting a process,
            supporting an implementation, testing a workflow, or taking
            recurring work off your plate, I&apos;d be happy to talk.
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
                {siteConfig.location}
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
