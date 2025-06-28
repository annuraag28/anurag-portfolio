'use client';

import React from 'react';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animations/fadeIn';
import { SOCIAL_LINKS } from '@/constants/data';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <h1>
          Hi, I'm <span>Anurag Kumar</span>
        </h1>
        <h2>Software Development Engineer II</h2>
        <p>
          Full Stack Developer with 2.5+ years of experience building scalable web apps using React, Node.js, and TypeScript.
        </p>

        <div className={styles.actions}>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.email}>Email</a>
          <a href="/Anurag_Resume_Cardekho.pdf" download>Download Resume</a>
        </div>
      </motion.div>
    </section>
  );
};
