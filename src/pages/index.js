import React, { useState } from 'react';
import { Link } from 'gatsby';
import { throttle } from 'lodash';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import DarkModeToggle from '../components/DarkModeToggle';
import SocialMediaLinks from '../components/SocialMediaLinks';
import styles from '../styles/pages/index.module.scss';


const IndexPage = () => {
  /* const { title, description } = useSiteMetadata(); */
  /* const splash_logo = useStaticQuery(graphql`
    query File {
      file(relativePath: {eq: "images/pv_splash_logo.png"}) {
        childImageSharp {
          id
          fixed(height: 180) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `); */
  const page = {
    title: "Petervaladez.com",
    description: "Personal site for Peter Valadez built with Gatsby!",
    path: "/"
  };
  const [filter, setFilter] = useState('drop-shadow(2px 4px 6px #0000008f)');
  const mousePos = React.useRef({x:0, y:0, d:0});
  const calcMouse = React.useCallback(
    throttle((pageX, pageY) => {
      let x = Math.round((window.innerWidth / 2 - pageX) / 35);
      let y = Math.round((window.innerHeight / 2 - pageY + window.pageYOffset - 95) / 35);
      let d = Math.round(Math.hypot(Math.abs(x), Math.abs(y)) / 3);
  
      function valueLimit(val, min, max) {
        return val < min ? min : (val > max ? max : val);
      }
      x = valueLimit(x, -16, 16);
      y = valueLimit(y, -16, 16);
      d = valueLimit(d, 2, 32);
      mousePos.current.x = x;
      mousePos.current.y = y;
      mousePos.current.d = d;
    },16),
    []
  );
  const throttledSetFilter = React.useCallback(
    throttle(newFilter => setFilter(newFilter), 16),
    []
  );
  const handleMouseMove = (event) => {
    if (window.innerWidth < 768) { return; } /* skip effect for mobile */
    let pageX = event.pageX,
        pageY = event.pageY;

    calcMouse(pageX, pageY);
    let { x, y, d } = mousePos.current;
    throttledSetFilter(`drop-shadow(${x}px ${y}px ${d}px #0000008f)`);
    /*  Todo: setup throttled function and optimize animation performance -- DONE! */
  }
  return (
    <>
      {/* <img className={styles.logo} src={pv_splash_logo} alt="petervaladez.com" /> */}
      <Layout page={page} containerClass={styles.container} hideHeader={true} hideFooter={true} >
        <div className={styles.mouseMoveContainer} onMouseMove={handleMouseMove} role="presentation">
          <div className={styles.logo}  style={{ filter: `${filter}` }}>
            {/* <Img  alt="petervaladez.com" fixed={splash_logo.file.childImageSharp.fixed}></Img> */}
            <Logo />
          </div>
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