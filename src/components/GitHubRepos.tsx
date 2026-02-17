"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  updated_at: string;
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">GitHub</h2>
        <a
          className="text-sm text-white/60 hover:text-white"
          href="https://github.com/SHANAL2525"
          target="_blank"
          rel="noreferrer"
        >
          View Profile →
        </a>
      </div>

      {loading ? (
        <p className="mt-4 text-white/60">Loading repositories...</p>
      ) : repos.length === 0 ? (
        <p className="mt-4 text-white/60">No repositories found.</p>
      ) : (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {repos.slice(0, 6).map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-white">{r.name}</h3>
                <span className="text-xs text-white/50">★ {r.stars}</span>
              </div>

              <p className="mt-2 text-sm text-white/65">
                {r.description || "No description yet"}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/50">
                {r.language ? (
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
                    {r.language}
                  </span>
                ) : null}

                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
                  Updated {new Date(r.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
