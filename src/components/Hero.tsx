"use client";

import { BACKGROUND } from "@/icons/background";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
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

export function Hero() {
  const { t } = useTranslation();
  const count = useMotionValue(0);
  const textIndex = useMotionValue(0);

  const texts = [
    t("Photographer"),
    "Inspiration",
    "Idol",
    "Cool gal",
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
      {/* Hero */}
      <div className='flex flex-col justify-center items-center py-10 px-40 h-screen md:h-[66vh]'>
        <BACKGROUND.GOLDEN_RATIO className='invisible sm:visible md:absolute -z-10 top-[225px] rotate-0 w-[calc(60vh*1.618)] h-[60vh]' />
        <div className='absolute top-[225px] lg:w-[calc(60vh*1.618)] lg:h-[60vh] grid grid-rows-11 lg:grid-rows-1 grid-cols-1 lg:grid-cols-11 px-6 py-4 lg:rotate-0'>
          <div className='md:col-span-7 p-5'>
            <h1 className='font-semibold uppercase tracking-tight text-6xl'>
              Venla Tuomala
            </h1>
            <div className='flex flex-row'>
              <motion.h2 className='pt-serif-regular-italic text-5xl'>
                {displayText}
              </motion.h2>
              <BlinkingCursor />
            </div>
          </div>
          <div className='md:col-span-4'>
            <Image
              src='/images/venla.png'
              alt='venla'
              className='p-10'
              width={420}
              height={420}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function BlinkingCursor() {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className='inline-block h-12 w-[1px] translate-y-1 bg-slate-900'
    />
  );
}
