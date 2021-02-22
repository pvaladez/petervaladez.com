import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@iconify/react';
import bxsHome from '@iconify/icons-bx/bxs-home';
import SocialMediaLinks from './SocialMediaLinks';
import styles from '../styles/components/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <section className={styles.footer_container}>
        <Link to="/" className={styles.home_link} aria-label="Go to home page">
          <Icon icon={bxsHome} />
        </Link>
        <SocialMediaLinks className={styles.socialMedia} />
      </section>
    </footer>
  );
}
