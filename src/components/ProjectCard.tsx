import {motion} from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: readonly string[];
  github: string;
  live: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <div className="flex gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 hover:text-white"
            >
              GitHub
            </a>
          ) : (
            <span className="rounded-xl border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/40">
              GitHub soon
            </span>
          )}

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 hover:text-white"
            >
              Live
            </a>
          ) : (
            <span className="rounded-xl border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/40">
              No live
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
