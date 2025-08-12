// src/lib/animations.ts
import { type Variants } from 'framer-motion';

/**
 * A parent container that staggers the animation of its children.
 * @param stagger - The delay between each child's animation.
 * @param delay - The delay before the first child starts animating.
 */
export const staggerContainer = (stagger: number = 0.1, delay: number = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/**
 * Fades in an element by animating its opacity.
 * @param duration - The duration of the animation.
 */
export const fadeIn = (duration: number = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration,
      ease: "easeOut",
    },
  },
});

/**
 * Fades in an element while sliding it up.
 * @param duration - The duration of the animation.
 * @param distance - The distance to slide up from.
 */
export const fadeInUp = (duration: number = 0.5, distance: number = 40): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: [0.6, -0.05, 0.01, 0.99], // A nice ease-out cubic bezier
    },
  },
});

/**
 * Fades in an element while sliding it in from the right.
 * @param duration - The duration of the animation.
 * @param distance - The distance to slide from.
 */
export const fadeInRight = (duration: number = 0.5, distance: number = 40): Variants => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

/**
 * Fades in an element while sliding it in from the left.
 * @param duration - The duration of the animation.
 * @param distance - The distance to slide from.
 */
export const fadeInLeft = (duration: number = 0.5, distance: number = 40): Variants => ({
  hidden: {
    opacity: 0,
    x: -distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});