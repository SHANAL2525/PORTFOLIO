"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundFX() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth follow (not instant)
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 180);
      y.set(e.clientY - 180);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <>
      {/* soft dot grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* moving gradient blob */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          x: sx,
          y: sy,
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.55), rgba(168,85,247,0.25), transparent 70%)",
        }}
      />

      {/* subtle vignette to keep it professional */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8))]" />
    </>
  );
}
