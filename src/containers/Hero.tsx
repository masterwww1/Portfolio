'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Hero = () => {
  const { subtitle, title, tagline, description, specialText } = heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base text-accent"
      >
        {subtitle}
      </motion.p>

      <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="leading-[1.2]"
        >
          {tagline}
        </motion.h1>
      </div>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base md:text-lg"
      >
        {description}
      </motion.p>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="font-mono text-xs md:text-sm text-accent"
      >
        {specialText}
      </motion.p>
    </Wrapper>
  );
};

export default Hero;
