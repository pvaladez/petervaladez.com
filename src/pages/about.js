import React from "react"
import { Link } from "gatsby"
import { Icon } from '@iconify/react';
import filePdfFilled from '@iconify/icons-ant-design/file-pdf-filled';
import githubIcon from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-cib/linkedin';
import stackoverflowIcon from '@iconify/icons-cib/stackoverflow';
import twitterIcon from '@iconify/icons-ant-design/twitter-circle-filled';
import devToIcon from '@iconify/icons-bx/bxl-dev-to';
import Layout from "../components/Layout"
import styles from "../styles/pages/about.module.scss"
import useSiteMetaData from "../hooks/useSiteMetadata"
import portrait from "../../content/images/portrait.png"
import gears from "../../content/images/bill-oxford--fGqsewtsJY-unsplash.jpg"

export default function About() {
  const { infoData } = useSiteMetaData()
  /* const [state, setState] = useState() */
  /* useEffect( () => { */
  /* document.documentElement.style.setProperty('--background-color', infoData.background_color); */
  //document.getElementById('dynamicStyles').sheet.deleteRule(0);
  /* document.getElementById('dynamicStyles').sheet.insertRule(`:root { --background-color: ${infoData.background_color} }`); */
  /* },[]); */
  const page = {
    title: "About · Petervaladez",
    description: "Personal site for Peter Valadez built with Gatsby!",
    path: "/about",
  }

  return (
    <Layout
      page={page}
      className={styles.about_page}
      containerClass={styles.content}
    >
      <h1 className="width100">About me</h1>
      <section className={styles.about_blurb}>
        <img className={styles.portrait} src={portrait} alt="hello!" />
        <h2>Hi! My name is Peter, and I love building things on the web!</h2>
        <p>
          I love that web development offers the opportunity to see tangible
          results from my efforts. It also offers the potential to positively
          impact billions of people just by being part of the internet. <em>Awesome!</em>
        </p>
        <p>
          <strong className={styles.strong}>As a front-end developer</strong>, I
          am focused on using modern tooling to create performant, reliable, and
          accessible web experiences with HTML and Javascript. Those experiences
          become beautiful with the shine of carefully crafted CSS and the
          aesthetic of modern design principles. Although my current focus is on
          frontend development, I do believe there is value in understanding the
          whole stack.
        </p>
        <img className={styles.gears_pic} src={gears} alt="gears of the internet" />
        <p>
          While working as a support technician in the hosting undustry my first 
          role was to keep other people’s web projects running and available
          online. {/* It was a valuable experience, because I got to experience
          everything behind-the-scenes that makes the internet what it is. When
          most people pull up a website or use an internet-powered service they
          don’t realize all the moving pieces that go into making the magic
          happen on their screen. */} In supporting a wide variety of technologies
          at the data center, I have cultivated a fine appreciation for all the
          hard work that goes into delivering web services across thousands of
          miles in a matter of milliseconds. In more recent years I’ve had the
          opportunity to focus on web development in a professional context, and
          I’ve found the creative process of web development to be very
          rewarding.
        </p>
        <div className={styles.cta_box}>
          <h3>Want to know more?</h3>
          <ul className={styles.contact_me_list}>
            <li><span><a href="/PeterValadez_resume.pdf">Have a look at my resume</a></span></li>
            <li><span><Link to="/contact">Contact me here on the site</Link></span></li>
            <li><span>Check out my social media accounts
              <span aria-label="to the right" role="img"> 👉</span> or
              <span aria-label="in the footer" role="img">👇</span></span>
            </li>
          </ul>
        </div>
        {/* <p>
        <strong className={styles.strong}>Want to know more?</strong>
        </p> */}


        {/* <h2>Interests</h2>
        <h2>Something Else</h2> */}
        <h2>About this site</h2>
        <div dangerouslySetInnerHTML={{ __html: infoData.description }}></div>
        <div dangerouslySetInnerHTML={{ __html: infoData.cta }}></div>

      </section>
      <aside className={styles.aside}>
        <h2>tl;dr:</h2>
        <h3 className={styles.resume_link}><a href="/PeterValadez_resume.pdf">
          <Icon icon={filePdfFilled} /> Resume</a></h3>
        <h3>Social Media:</h3>
        <ul>
          <li>
            <p>
              <a href={infoData.contact.github.url}>
                <Icon icon={githubIcon} aria-hidden="true" className={`${styles.social_icon} github_icon`}/>
                Github: {infoData.contact.github.handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={infoData.contact.linkedin_url}>
                <Icon icon={linkedinIcon} aria-hidden="true" className={styles.social_icon} />
                Linkedin
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={infoData.contact.stackoverflow_url}>
                <Icon icon={stackoverflowIcon} aria-hidden="true" className={styles.social_icon} />
                Stack Overflow
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={infoData.contact.devto_url}>
                <Icon icon={devToIcon} aria-hidden="true" className={`${styles.social_icon} twitter_icon`} />
                Dev.to
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={infoData.contact.twitter.url}>
                <Icon icon={twitterIcon} aria-hidden="true" className={`${styles.social_icon} devto_icon`} />
                Twitter: @{infoData.contact.twitter.handle}
              </a>
            </p>
          </li>
        </ul>
      </aside>
    </Layout>
  )
}
