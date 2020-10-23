import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import styles from '../styles/components/header.module.scss';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

export default function Header(props) {
  const [menuOpen, toggleMenu] = useState('');
  const handleMenuClick = () => {
    let setVal = menuOpen === 'menuOpen' ? '' : 'menuOpen';
    toggleMenu(setVal);
  }
  useEffect(()=>{
    menuOpen === 'menuOpen' ? 
      document.body.classList.add('menuOpen') 
      : document.body.classList.remove('menuOpen');
  },[menuOpen])

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
            <h3 className={styles.site_title}>Petervaladez</h3>
          </Link>
          <div className={`${styles.nav_links} ${menuOpen}`}>
            <h3 className={styles.nav_link}>
              <Link to="/about">About</Link>
            </h3>
            <h3 className={styles.nav_link}>
              <Link to="/blog">Blog</Link>
            </h3>
            <h3 className={styles.nav_link}>
              <Link to="/contact">Contact</Link>
            </h3>
            <DarkModeToggle />
            {props.children}
          </div>
          <button className={`${styles.menu_button} ${menuOpen}`} 
            onClick={handleMenuClick}>
            <span className={styles.menu_icon}></span>
          </button>
        </nav>
      </section>
    </header>
  )
}
