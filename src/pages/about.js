import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/pages/about.module.scss';
import useSiteMetaData from '../hooks/useSiteMetadata';
/* import ThemeProvider from '../components/ThemeProvider'; */

export default function About() {
  const { infoData } = useSiteMetaData()
  /* const [state, setState] = useState() */
  /* useEffect( () => { */
    /* document.documentElement.style.setProperty('--background-color', infoData.background_color); */
    //document.getElementById('dynamicStyles').sheet.deleteRule(0);
    /* document.getElementById('dynamicStyles').sheet.insertRule(`:root { --background-color: ${infoData.background_color} }`); */
  /* },[]); */

  return (
      <Layout page="about" className={styles.about_page} contentClass={styles.content}>
        <section className={styles.about_blurb}>
          <h2>
            <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
            <div dangerouslySetInnerHTML={{__html: infoData.cta}}></div>
          </h2>
          <ul>
            <li>
              <p>
                <a href={infoData.contact.twitter.url}>
                  Twitter: @{infoData.contact.twitter.handle}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={infoData.contact.github.url}>Github: {infoData.contact.github.handle}</a>
              </p>
            </li>
          </ul>
        </section>
      </Layout>
  )
}