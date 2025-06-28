'use client';

import React from 'react';
import styles from './Footer.module.scss';
import { SOCIAL_LINKS } from '@/constants/data';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Anurag Kumar. All rights reserved.</p>
        <div className={styles.links}>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={SOCIAL_LINKS.email}>Email</a>
        </div>
      </div>
    </footer>
  );
};
