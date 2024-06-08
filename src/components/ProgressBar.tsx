"use client";
import { motion, useScroll } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative rounded-full">
      <motion.div
        className='m-2 relative rounded-full origin-top-left h-1 bg-black z-20'
        style={{
          scaleX: scrollYProgress,
        }}></motion.div>
      <div
        className='m-2 relative rounded-full origin-top-left h-1 bg-goldenisher z-10 -translate-y-3'>
      </div>
    </div>
  );
}
