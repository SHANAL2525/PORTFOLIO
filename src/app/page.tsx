"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import Image from "next/image";

/** Stronger, more visible + smooth animations */
const smooth = { type: "spring", stiffness: 110, damping: 18, mass: 0.9 };

const cardInLeft = {
  hidden: { opacity: 0, x: -45, scale: 0.96, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
};

const cardInRight = {
  hidden: { opacity: 0, x: 45, scale: 0.96, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
};

const cardInUp = {
  hidden: { opacity: 0, y: 45, scale: 0.96, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-14 md:py-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_280px]">
            {/* Left */}
            <div>
              <p className="text-sm text-white/60">
                Software Engineer Intern • React • Vue • Java • SQL
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Shanal Thanushka <span className="text-white/70">Weerathunga</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                I’m a software engineering student building responsive web apps and Java-based
                systems. I enjoy solving real-world problems, collaborating in teams, and improving
                my skills while preparing for a professional internship.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition"
                >
                  View Projects
                </a>
                <a
                  href="https://github.com/SHANAL2525"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-black/40 px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:border-white/30 transition"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:border-white/30 transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right: photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto w-[220px]"
            >
              <div className="rounded-full p-[2px] bg-[conic-gradient(from_180deg,rgba(59,130,246,0.9),rgba(168,85,247,0.7),rgba(59,130,246,0.9))]">
                <div className="rounded-full bg-black p-2">
                  <Image
                    src="/me.png"
                    alt="Shanal Thanushka Weerathunga"
                    width={220}
                    height={220}
                    priority
                    className="rounded-full object-cover grayscale-[20%] transition hover:grayscale-0"
                  />
                </div>
              </div>

              <p className="mt-3 text-center text-xs text-white/50">
                Software Engineer Intern
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section id="about" className="py-10">
        <h2 className="text-xl font-semibold text-white">About</h2>
        <p className="mt-3 max-w-3xl text-white/70 leading-relaxed">
          I’m a motivated software engineering student with hands-on experience in web development
          and Java application development. I’ve collaborated on academic team projects, built
          responsive UI, and worked with structured logic and SQL concepts. I’m currently seeking a{" "}
          <span className="text-white">Software Engineer Internship</span> to contribute to real
          projects and learn modern development practices.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-10">
        <h2 className="text-xl font-semibold text-white">Skills</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <motion.div
            variants={cardInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
            transition={smooth}
          >
            <SkillBox
              title="Frontend"
              items={["React.js", "Vue.js", "HTML5", "CSS3", "Responsive UI"]}
            />
          </motion.div>

          <motion.div
            variants={cardInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
            transition={smooth}
          >
            <SkillBox title="Programming" items={["Java", "OOP", "Data Structures basics"]} />
          </motion.div>

          <motion.div
            variants={cardInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
            transition={smooth}
          >
            <SkillBox title="Database & Tools" items={["SQL", "Git", "GitHub", "VS Code"]} />
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <p className="text-sm text-white/50">{projects.length} selected</p>
        </div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-5 grid gap-4 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={cardInUp} transition={smooth}>
              <ProjectCard project={p as any} />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-4 text-sm text-white/50">
          I will keep adding and improving projects over time.
        </p>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">Certifications</h2>
          <p className="text-sm text-white/50">Selected</p>
        </div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-5 grid gap-4 md:grid-cols-2"
        >
          {certifications.map((c) => (
            <motion.a
              key={`${c.issuer}-${c.title}`}
              href={c.url || "#"}
              target={c.url ? "_blank" : undefined}
              rel={c.url ? "noreferrer" : undefined}
              variants={cardInUp}
              transition={smooth}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{c.issuer}</p>
                </div>

                {c.url ? (
                  <span className="rounded-xl border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    View
                  </span>
                ) : (
                  <span className="rounded-xl border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/40">
                    Link soon
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-white/65">
                Certificates show continuous learning and internship preparation.
              </p>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12">
        <h2 className="text-xl font-semibold text-white">Contact</h2>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/70">
            Interested in internship opportunities or collaboration? Feel free to reach out.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:thanushkashanal@gmail.com"
              className="rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/SHANAL2525"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-black/40 px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:border-white/30 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shanal-weerathunga-240ab12a6"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-blue-400/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            I’m currently seeking a <span className="text-white">Software Engineer Internship</span>.
          </p>
        </div>
      </section>
    </main>
  );
}

function SkillBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition duration-300">
      <h3 className="font-medium text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
