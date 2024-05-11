"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Circle } from "lucide-react";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className='m-2 rounded-full origin-top-left h-1 bg-goldenisher z-20'
        style={{
          scaleX: scrollYProgress,
        }}></motion.div>
    </>
  );
}
