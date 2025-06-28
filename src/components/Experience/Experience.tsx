'use client';

import React from 'react';
import styles from './Experience.module.scss';
import { EXPERIENCE } from '@/constants/data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animations/fadeIn';

export const Experience: React.FC = () => {
  return (
    <section className={styles.experience} id="experience">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Experience</h2>
        <div className={styles.timeline}>
          {EXPERIENCE.map((job, index) => (
            <div className={styles.card} key={index}>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <span className={styles.duration}>{job.duration}</span>
              <ul>
                {job.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
