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
    "Kristian Bailo's path from hands-on operations, administrative support, and coordination to practical, AI-assisted digital product building.",
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
            learned to use technology because I kept seeing everyday problems
            that deserved a better system.
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
              <span>Open to remote work</span>
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
              becomes difficult. I began thinking less about isolated tasks
              and more about the system connecting them.
            </p>

            <p>
              That became the foundation for PAMS. SINKPESO came from a
              different kind of problem—wanting a personal finance tool that
              felt private, simple, and built around Philippine pesos. Both
              projects follow the same principle: understand the real behavior
              first, then shape the technology around it.
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
              I&apos;m looking for work where this mindset is useful.
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
