'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { useTheme } from '@/context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Anurag</div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
          {NAV_ITEMS.map((item, i) => (
            <li key={i} onClick={() => setMenuOpen(false)}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className={styles.toggle}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
