"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Image
              src="/images/kristian-bailo-portrait.webp"
              alt="Kristian Bailo"
              width={42}
              height={42}
              className="brand-avatar"
              priority
            />
          </span>
          <span>
            <strong>Kristian Bailo</strong>
            <small>Practical support, organized with care.</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? "active" : undefined}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
