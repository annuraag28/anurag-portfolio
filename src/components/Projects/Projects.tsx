'use client';

import React from 'react';
import styles from './Projects.module.scss';
import { PROJECTS } from '@/constants/data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animations/fadeIn';

export const Projects: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
