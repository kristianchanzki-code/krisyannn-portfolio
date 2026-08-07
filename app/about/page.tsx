import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Lightbulb,
  Repeat2,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kristian Bailo's operations background, practical approach to support work, and expansion into virtual assistance and freelance opportunities.",
};

export default function AboutPage() {
  return (
    <section className="section-pad page-hero">
      <div className="shell narrow-shell">
        <Reveal>
          <p className="eyebrow">About Kristian</p>

          <h1>
            I learn by solving real problems.
          </h1>

          <p className="page-lead">
            I&apos;m an operations professional with hands-on experience in
            records, coordination, documentation, and day-to-day support. I
            value organization, clarity, and follow-through, and I learn and
            use technology when it helps make the work easier to understand
            and manage.
          </p>
        </Reveal>

        <Reveal className="portrait-card" delay={0.08}>
          <div className="portrait-photo">
            <Image
              src="/images/kristian-bailo-portrait.webp"
              alt="Portrait of Kristian Bailo"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
              className="portrait-image"
              priority
            />
          </div>

          <div className="portrait-note">
            <p className="eyebrow">Behind the work</p>

            <h2>Operations first. Technology as a tool.</h2>

            <p>
              I work from things I have personally encountered: records that
              need attention, repeated follow-ups, unclear handoffs, and
              everyday processes that deserve a simpler system.
            </p>

            <div className="portrait-facts">
              <span>Based in the Philippines</span>
              <span>2 years and 6 months in operations</span>
              <span>Open to VA and freelance support</span>
            </div>
          </div>
        </Reveal>

        <div className="essay-grid">
          <Reveal className="essay-main">
            <h2>My work started in the real world.</h2>

            <p>
              At BLACKMING, I help manage the operational lifecycle of POS
              devices, portable printers, SIM cards, and booth assignments.
              The work includes deployment, replacement, returns, repair
              coordination, recordkeeping, and communication across different
              roles.
            </p>

            <p>
              When important information is scattered across files,
              conversations, and individual memory, even a simple follow-up
              becomes difficult. I value clear records, visible next steps,
              and the follow-through that keeps work from getting lost between
              people.
            </p>

            <p>
              That practical mindset led me to PAMS and SINKPESO. I learned and
              used AI-assisted development to turn real ideas into working
              tools while keeping the workflow and the person using it at the
              center. Technology supports the work; it is not the starting
              point.
            </p>

            <p>
              I&apos;m now bringing the same organization, follow-through, and
              curiosity into virtual assistance and freelance support. I&apos;m
              comfortable learning new tools, workflows, and responsibilities
              as the work requires.
            </p>
          </Reveal>

          <Reveal className="principles" delay={0.08}>
            <div>
              <Compass />
              <strong>Practical over flashy</strong>
              <p>A solution should make the next action clearer.</p>
            </div>

            <div>
              <HeartHandshake />
              <strong>Human over technical</strong>
              <p>The interface must respect the person doing the work.</p>
            </div>

            <div>
              <Repeat2 />
              <strong>Iterative over perfect</strong>
              <p>Real feedback reveals what the first plan missed.</p>
            </div>

            <div>
              <Lightbulb />
              <strong>Curious over pretending</strong>
              <p>
                I&apos;d rather learn honestly than claim expertise I
                don&apos;t have.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="inline-cta">
          <div>
            <p className="eyebrow">What comes next</p>

            <h2>
              I&apos;m ready to bring reliable support to a good-fit role or project.
            </h2>
          </div>

          <Link className="button button-primary" href="/contact">
            Discuss an opportunity
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
