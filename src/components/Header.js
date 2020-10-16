import React from "react"
import { Link } from "gatsby"
import styles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${styles.header} ${props.page === 'info' &&
        styles.info_page}`}
    >
      <nav
        className={styles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <Link
              to={
                props.page === 'about'
                  ? "/"
                  : "/about"
              }
              activeClassName={styles.navItemActive}
            >
              {props.page === 'about'
                ? "close"
                : "about"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}