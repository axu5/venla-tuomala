"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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

export function TypingText() {
  const { t } = useTranslation();
  const count = useMotionValue(0);
  const textIndex = useMotionValue(0);

  const texts = [
    t("a photographer"),
    t("a student"),
    t("a coffee-lover"),
    t("a travel enthusiast"),
    t("a person who gets things done"),
  ];
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
      <motion.span className='pt-serif-regular-italic text-brownish font-semibold'>
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
      className='inline-block h-[30px] w-[1px] translate-y-1 bg-slate-900 ml-[2px]'
    />
  );
}
