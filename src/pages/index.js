import React from 'react';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import DarkModeToggle from '../components/DarkModeToggle';
import SocialMediaLinks from '../components/SocialMediaLinks';
import styles from '../styles/pages/index.module.scss';


const IndexPage = () => {
  const page = {
    title: "Petervaladez.com",
    description: "Personal site for Peter Valadez built with Gatsby!",
    path: "/"
  };
  const dropFilter = (x, y, b) => `drop-shadow(${x}px ${y}px ${b}px #0000008f)`;
  const calc = ( clientX, clientY ) => {
    let x = (window.innerWidth / 2 - clientX) / 25;
    let y = (window.innerHeight / 2 - clientY + window.pageYOffset - 95) / 35;
    let b = Math.hypot(Math.abs(x), Math.abs(y)) / 4;
  
    function valueLimit(val, min, max) {
      return val < min ? min : (val > max ? max : val);
    }
    x = valueLimit(x, -12, 12);
    y = valueLimit(y, -12, 12);
    b = valueLimit(b, 2, 32);
    return [ x, y, b ];
  }
  const handleMouseMove = ({ clientX, clientY}) => {
    if (window.innerWidth < 768) { return; } /* skip effect for mobile */
    
    set({
     xyb: calc(clientX, clientY)
    });
  }
  const [props, set] = useSpring(() => ({
    xyb: [2,4,6],
    config: { mass: 6, tension: 750, friction: 100 }
  }));

  return (
    <>
      <Layout page={page} containerClass={styles.container} hideHeader={true} hideFooter={true} >
        <div className={styles.mouseMoveContainer} 
          onMouseMove={handleMouseMove} 
          role="presentation">
          <animated.div className={styles.logo}  style={{ filter: props.xyb.interpolate(dropFilter) }}>
            <Logo />
          </animated.div>
          <nav className={styles.nav_links} role="navigation" aria-label="main navigation">
            <h2 className={styles.nav_link}><Link to="/about">About</Link></h2>
            <h2 className={styles.nav_link}><Link to="/blog">Blog</Link></h2>
            <h2 className={styles.nav_link}><Link to="/contact">Contact</Link></h2>
          </nav>
          <SocialMediaLinks className={styles.socialMedia} />
          <DarkModeToggle className={styles.dark_toggle}/>
        </div>
      </Layout>
    </>
  )
} 

export default IndexPage;