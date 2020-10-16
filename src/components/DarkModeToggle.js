import React, {useContext} from "react"
import { Icon } from '@iconify/react';
import sunIcon from '@iconify/icons-bx/bxs-sun';
import moonIcon from '@iconify/icons-bx/bx-moon';
import { ThemeContext } from "./ThemeProvider.js"
import styles from '../styles/components/darkModeToggle.module.scss'

export default function DarkModeToggle(props) {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <button
      className={`${styles.dark_toggle} ${props.className ? props.className : ''}`}
      aria-label="Light and dark mode switch"
      onClick={event => {
        setColorMode(colorMode === "dark" ? "light" : "dark")
      }}
    >
      {colorMode === "dark" ? (
        <Icon icon={sunIcon} />
      ) : (
        <Icon icon={moonIcon} />
      )}
    </button>
  )
}
