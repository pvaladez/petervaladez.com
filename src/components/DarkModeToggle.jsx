import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify/icons-bx/bxs-sun';
import moonIcon from '@iconify/icons-bx/bx-moon';
import { ThemeContext } from './ThemeProvider';
import styles from '../styles/components/darkModeToggle.module.scss';

export default function DarkModeToggle({ className }) {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <button
      className={`${styles.dark_toggle} ${
        className || ''
      }`}
      aria-label="Light and dark mode toggle button"
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
      type="button"
    >
      {colorMode === 'dark' ? (
        <Icon icon={moonIcon} />
      ) : (
        <Icon icon={sunIcon} />
      )}
    </button>
  );
}
