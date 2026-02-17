"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-white font-semibold tracking-tight">
          Shanal<span className="text-white/50">.dev</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:block">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="mx-2 inline-block rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              {i.label}
            </a>
          ))}

          <a
            href="https://github.com/SHANAL2525"
            target="_blank"
            rel="noreferrer"
            className="mx-2 inline-block rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white/80 hover:text-white transition"
          aria-label="Open menu"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-1 block h-[2px] w-6 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-1 block h-[2px] w-6 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-4">
            <div className="flex flex-col gap-3 text-white/80">
              {navItems.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:text-white transition"
                >
                  {i.label}
                </a>
              ))}
              <a
                href="https://github.com/SHANAL2525"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
