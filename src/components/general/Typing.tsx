import { motion, useAnimation, type Variants } from 'framer-motion';
import { useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  loopDelay?: number;
  speedMultiplier?: number; // Added prop for speed
}

const TypingAnimation = ({ text, className, loopDelay = 20000, speedMultiplier = 1 }: TypingAnimationProps) => {
  const controls = useAnimation();
  const animationSpeed = 0.08 / speedMultiplier; // Adjust animation speed

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: animationSpeed,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start('visible');
        await new Promise(resolve => setTimeout(resolve, loopDelay));
        await controls.start('hidden');
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };
    sequence();
  }, [controls, loopDelay, animationSpeed]); // Add animationSpeed to dependencies

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      aria-label={text}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default TypingAnimation;