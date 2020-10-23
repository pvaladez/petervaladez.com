import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/pages/contact.module.scss';
import ContactForm from '../components/ContactForm';
/* import ThemeProvider from '../components/ThemeProvider'; */

export default function Contact() {
  const page = {
    title: "Contact · Petervaladez",
    description: "Contact Peter on Petervaladez.com",
    path: "/contact"
  };
  return (
      <Layout
        page={page}
        className={styles.contact_page}
        containerClass={styles.content}
        bgColor="inherit"
      >
        <h1>Say Hello!</h1>

        <section className={styles.contact_blurb}>
          A mote of dust suspended in a sunbeam science Jean-François Champollion
          dream of the mind's eye as a patch of light the ash of stellar alchemy.
          How far away cosmic ocean are creatures of the cosmos intelligent beings
          realm of the galaxies courage of our questions. The only home we've ever
          known tingling of the spine billions upon billions network of wormholes
          muse about at the edge of forever and billions upon billions upon
          billions upon billions upon billions upon billions upon billions.
          <br/><br/><br/>
          <h2>Todo:</h2>
          <ol>
            <li>Create Successful Submit page/section</li>
            <li>Write blurb section</li>
            <li>Better error handling</li>
            <li>Save message to local storage in case of error?</li>
          </ol>
        </section>
        <section className={styles.contact_form}>
          <ContactForm />
        </section>
      </Layout>
  )
}
