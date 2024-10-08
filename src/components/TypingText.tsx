"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

type TypingTextProps = {
  texts: string[];
};

export function TypingText({ texts }: TypingTextProps) {
  const count = useMotionValue(0);
  const textIndex = useMotionValue(0);

  const baseText = useTransform(
    textIndex,
    latest => texts[latest] || ""
  );

  const rounded = useTransform(count, latest => Math.round(latest));
  const displayText = useTransform(rounded, latest =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          textIndex.set((textIndex.get() + 1) % texts.length);
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.span className='pt-serif-regular-italic text-muted-gray font-semibold'>
        {displayText}
      </motion.span>
      <BlinkingCursor />
    </>
  );
}

function BlinkingCursor() {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className='inline-block h-[47px] w-[1px] translate-y-1 bg-slate-900 ml-[2px]'
    />
  );
}
