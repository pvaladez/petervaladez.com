import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/pages/about.module.scss"
import useSiteMetaData from "../hooks/useSiteMetadata"
import portrait from "../../content/images/portrait.png"

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
        <p>
          While working at a hosting and colocation data center my role most of
          the time was to keep other people’s web projects running and available
          online. It was a valuable experience, because I got to experience
          behind-the-scenes everything that makes the internet what it is. When
          most people pull up a website or use an internet-powered service they
          don’t realize all the moving pieces that go into making the magic
          happen on their screen. In supporting a wide variety of technologies
          at the data center, I have cultivated a fine appreciation for all the
          hard work that goes into delivering web services across thousands of
          miles in a matter of milliseconds. In more recent years I’ve had the
          opportunity to focus on web development in a professional context, and
          I’ve found the creative process of web development to be very
          rewarding.
        </p>
        <p>
        <strong className={styles.strong}>Want to know more?</strong>
        </p>
        <ul className={styles.contact_me_list}>
          <li><a href="/PeterValadez_resume.pdf">Have a look at my resume</a></li>
          <li><Link to="/contact">Contact me here on the site</Link></li>
          <li>Check out my social media accounts in the links 
            <span aria-label="to the right" role="img"> 👉</span> or 
            <span aria-label="in the footer" role="img">👇</span>
          </li>
        </ul>   
        
        <h2>Interests</h2>
        <h2>Something Else</h2>
        <h2>About this site</h2>
        <h2>
          <div dangerouslySetInnerHTML={{ __html: infoData.description }}></div>
          <div dangerouslySetInnerHTML={{ __html: infoData.cta }}></div>
          Here's my resume:
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
              <a href={infoData.contact.github.url}>
                Github: {infoData.contact.github.handle}
              </a>
            </p>
          </li>
        </ul>
      </section>
      <aside className={styles.aside}>Social Media and Links go here!</aside>
    </Layout>
  )
}
