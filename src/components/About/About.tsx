'use client';

import React from 'react';
import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animations/fadeIn';

export const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with 2.5+ years of experience in building scalable applications and clean developer-friendly APIs.
          I specialize in React, Node.js, TypeScript, and API development — with strong focus on performance and best practices.
        </p>

        <div className={styles.skills}>
          <h3>Tech Stack</h3>
          <ul>
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
              'MongoDB', 'MySQL', 'Redux', 'Postman', 'JIRA',
            ].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
