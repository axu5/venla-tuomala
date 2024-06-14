"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const t = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className='relative'>
      <motion.div
        className='m-2 relative origin-top-left h-1 bg-goldenisher z-20'
        style={{
          scaleX: scrollYProgress,
        }}></motion.div>
      <div className='m-2 relative rounded-full origin-top-left h-1 bg-muted-gray z-10 -translate-y-3'></div>
    </div>
  );
}
