import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-note">Built from real operations, ongoing curiosity, and a lot of careful iteration.</p>
          <p className="muted">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
        <div className="footer-links">
          <Link href="/projects/pams">PAMS</Link>
          <Link href="/projects/sinkpeso">SINKPESO</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
