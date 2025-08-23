'use client';

import { motion } from 'framer-motion';

const Transition = () => {
  const transitionVariants = {
    initial: {
      y: '100%',
      height: '100%'
    },
    animate: {
      y: '0%',
      height: '0%'
    },
    exit: {
      y: ['0%', '100%'],
      height: ['0%', '100%']
    }
  }

  return (
    <>
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-30 bg-primary"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
      />
       <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-20 bg-secondary"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
      />
       <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-10 bg-accent"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
      />
    </>
  );
};

export default Transition;
