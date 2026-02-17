export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Shanal Thanushka Weerathunga</p>
        <p className="text-white/40">
          Built with Next.js + Tailwind • Dark theme
        </p>
      </div>
    </footer>
  );
}
