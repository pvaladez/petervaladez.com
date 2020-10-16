import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/components/header.module.scss';
import Logo from './Logo';

export default function Header(props) {
  return (
    <header className={styles.header_wrapper}>
      <section className={styles.header_container}>
        <nav
          className={styles.header__nav}
          role="navigation"
          aria-label="main navigation"
        >
          <Link className={styles.logo} to="/">
            <Logo className={styles.logo} />
            <h1>{props.title}</h1>
          </Link>
          <div className={styles.nav_links}>
            <h1>
              <Link to="/about">About</Link>
            </h1>
            <h1>
              <Link to="/blog">Blog</Link>
            </h1>
            <h1>
              <Link to="/contact">Contact</Link>
            </h1>
            {props.children}
          </div>
        </nav>
      </section>
    </header>
  )
}
