import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/pages/contact.module.scss"
import ContactForm from "../components/ContactForm"
/* import ThemeProvider from '../components/ThemeProvider'; */

export default function Contact() {
  const page = {
    title: "Contact · Petervaladez",
    description: "Contact Peter on Petervaladez.com",
    path: "/contact",
  }
  return (
    <Layout
      page={page}
      className={styles.contact_page}
      containerClass={styles.content}
      bgColor="inherit"
    >
      <h1>Say Hello!</h1>

      <section className={styles.contact_blurb}>
        <p>
          Whether you are a fellow developer looking to chat, have feedback
          for this site, or have a project in mind I would love to hear from
          you! The web developer community has taught me a lot over the years,
          and I love that I have been able to find people who are more talented
          than me and willing to share their ideas. In appreciation of that, I
          would love to give back in any way I can.
        </p>
        <br />
        {/* <h2>Todo:</h2>
        <ol>
          <li>Create Successful Submit page/section</li>
          <li>Write blurb section</li>
          <li>Better error handling</li>
          <li>Save message to local storage in case of error?</li>
        </ol> */}
      </section>
      <section className={styles.contact_form}>
        <ContactForm />
      </section>
    </Layout>
  )
}
