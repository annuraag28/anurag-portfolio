'use client';

import React from 'react';
import styles from './Contact.module.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animations/fadeIn';
import { SOCIAL_LINKS } from '@/constants/data';

export const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="contact">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Contact</h2>
        <p>Want to collaborate or have an opportunity? Let&apos;s connect!</p>

        <a href={SOCIAL_LINKS.email} className={styles.email}>
          {SOCIAL_LINKS.email.replace('mailto:', '')}
        </a>

        <div className={styles.socials}>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};
