import React from 'react';
import SEO from './Seo';
/* import useSiteMetadata from '../hooks/useSiteMetadata'; */
import Header from './Header';
import Footer from './Footer';
import { oneLine } from 'common-tags';
import '../styles/font.Roboto.css';
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import '../styles/normalize.css';
/* import '../styles/reset.scss'; */
import '../styles/global.scss';
import styles from '../styles/components/layout.module.scss';

export default function Layout(props) {
  /* const { title, description } = useSiteMetadata(); */


  return (
    <>
      {/* Using a shorthand React fragment here so I can put
            <SEO/> at the top... Helmet works anywhere, but I
            like having it here b/c it conveys the idea that the
            contents are going into the <head /> */}
      <SEO page={props.page} />
      {/* Used a div for the .layout wrapper because #___gatsby
          and #gatsby-focus-wrapper are div's and adding one
          more div says, ok... the div'itis stops here buddy */}
      <div
        className={oneLine`${styles.layout}
          ${props.className ? props.className : ""}`}
      >
        {!props.hideHeader && <Header />}
        <main className={styles.main_wrapper}>
          <section
            className={` ${styles.main_container} ${
              props.containerClass ? props.containerClass : ""
            }`}
          >
            {props.children}
          </section>
        </main>
        {!props.hideFooter && <Footer />}
      </div>
    </>
  )
}
