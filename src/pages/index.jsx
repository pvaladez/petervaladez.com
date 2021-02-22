import React from 'react';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import DarkModeToggle from '../components/DarkModeToggle';
import SocialMediaLinks from '../components/SocialMediaLinks';
import styles from '../styles/pages/index.module.scss';

export default function IndexPage() {
  const page = {
    title: 'Petervaladez.com',
    description: 'Personal site for Peter Valadez built with Gatsby!',
    path: '/',
  };
  const [spring, set] = useSpring(() => ({
    xyb: [2, 4, 6],
    config: { mass: 6, tension: 750, friction: 100 },
  }));
  const dropFilter = (x, y, b) => `drop-shadow(${x}px ${y}px ${b}px #0000008f)`;
  const calc = (clientX, clientY) => {
    let x = (window.innerWidth / 2 - clientX) / 25;
    let y = (window.innerHeight / 2 - clientY + window.pageYOffset - 95) / 35;
    let b = Math.hypot(Math.abs(x), Math.abs(y)) / 4;

    function valueLimit(val, min, max) {
      return Math.min(Math.max(min, val), max);
    }
    x = valueLimit(x, -12, 12);
    y = valueLimit(y, -12, 12);
    b = valueLimit(b, 2, 32);
    return [x, y, b];
  };
  const handleMouseMove = ({ clientX, clientY }) => {
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    } /* skip effect for mobile or if client prefers reduced motion */

    set({
      xyb: calc(clientX, clientY),
    });
  };

  return (
    <>
      <Layout
        page={page}
        containerClass={styles.container}
        hideHeader
        hideFooter
      >
        <h1 className="sr-only">peter valadez dot com</h1>
        <div
          className={styles.mouseMoveContainer}
          onMouseMove={handleMouseMove}
          role="presentation"
        >
          <animated.div
            className={styles.logo}
            style={{ filter: spring.xyb.interpolate(dropFilter) }}
          >
            <Logo />
          </animated.div>
          <nav
            className={styles.nav_links}
            role="navigation"
            aria-label="main navigation"
          >
            <h2 className={styles.nav_link}>
              <Link to="/about">About</Link>
            </h2>
            <h2 className={styles.nav_link}>
              <Link to="/blog">Blog</Link>
            </h2>
            <h2 className={styles.nav_link}>
              <Link to="/contact">Contact</Link>
            </h2>
          </nav>
          <SocialMediaLinks className={styles.socialMedia} />
          <DarkModeToggle className={styles.dark_toggle} />
        </div>
      </Layout>
    </>
  );
}
