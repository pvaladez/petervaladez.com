import React from 'react';
import {Link} from 'gatsby';
import SocialMediaLinks from './SocialMediaLinks';
import styles from '../styles/components/footer.module.scss';

export default function Footer() {

  return (
    <footer className={styles.footer_wrapper}>
      <section className={styles.footer_container}>
        <Link to="/">Home</Link>
        <SocialMediaLinks className={styles.socialMedia}/>
      </section>
    </footer>
  );

}