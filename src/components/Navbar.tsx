import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Shanal<span className="text-white/50">.dev</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#certifications" className="hover:text-white">Certifications</a>
          <a
            href="https://github.com/SHANAL2525"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>


        </nav>
      </div>
    </header>
  );
}
