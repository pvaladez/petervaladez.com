import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
/* import DOMPurify from 'dompurify'; */
import { Icon } from '@iconify/react';
import filePdfFilled from '@iconify/icons-ant-design/file-pdf-filled';
import githubIcon from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-cib/linkedin';
import stackoverflowIcon from '@iconify/icons-cib/stackoverflow';
import twitterIcon from '@iconify/icons-ant-design/twitter-circle-filled';
import devToIcon from '@iconify/icons-bx/bxl-dev-to';
import Layout from '../components/Layout';
import styles from '../styles/pages/about.module.scss';
import useSiteMetaData from '../hooks/useSiteMetadata';
import PortfolioSlider from '../components/PortfolioSwiperB';

export default function About({ data }) {
  const { infoData } = useSiteMetaData();
  const page = {
    title: 'About · Petervaladez',
    description: 'Personal site for Peter Valadez built with Gatsby!',
    path: '/about',
  };

  return (
    <Layout
      page={page}
      className={styles.about_page}
      containerClass={styles.container}
    >
      <h1 className="width100">About me</h1>
      <section className={styles.aboutBlurb}>
        <div className={styles.aboutBlurb__main}>
          <Img
            className={styles.portrait}
            alt="hello!"
            fixed={data.portrait.childImageSharp.fixed}
            fadeIn={false}
          />
          <h2>Hi! My name is Peter, and I love building things on the web!</h2>
          <p>
            I love that web development offers the opportunity to see tangible
            results from my efforts. It also offers the potential to positively
            impact billions of people just by being part of the internet.
            {' '}
            <em>Awesome!</em>
          </p>
          <p>
            <strong className={styles.strong}>As a front-end developer</strong>
            , I
            am focused on using modern tooling to create performant, maintainable,
            and accessible web experiences with HTML and Javascript. Those
            experiences become beautiful with the shine of carefully crafted CSS
            and the aesthetic of modern design principles. Although my current
            focus is on frontend development, I do believe there is value in
            understanding the whole stack.
          </p>
          <figure className={styles.gears_pic}>
            <Img
              alt="gears of the internet"
              fixed={data.gears.childImageSharp.fixed}
              fadeIn={false}
            />
            <figcaption>
              <span>
                Photo by
                {' '}
                <a href="https://unsplash.com/@bill_oxford?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Bill Oxford
                </a>
                {' '}
                on
                {' '}
                <a href="https://unsplash.com/s/photos/internet-connection?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </figcaption>
          </figure>

          <p className={styles.ops_para}>
            While working as a support technician in the hosting industry my first
            role was to keep other people’s web projects running and available
            online.
            {' '}
            {/* It was a valuable experience, because I got to experience
          everything behind-the-scenes that makes the internet what it is. When
          most people pull up a website or use an internet-powered service they
          don’t realize all the moving pieces that go into making the magic
          happen on their screen. */}
            {' '}
            In supporting a wide variety of technologies at the data center, I
            have cultivated a fine appreciation for all the hard work that goes
            into delivering web services across thousands of miles in a matter of
            milliseconds. In more recent years I’ve had the opportunity to focus
            on web development in a professional context, and I’ve found the
            creative process of web development to be very rewarding.
          </p>
          <div className={`em-box ${styles.cta_box}`}>
            <h3>Want to know more?</h3>
            <ul className={styles.contact_me_list}>
              <li>
                <span>
                  See some of my past work below
                  <span role="img" aria-label="past work below">👇</span>
                </span>
              </li>
              <li>
                <span>
                  <a href="/PeterValadez_resume.pdf">Have a look at my resume</a>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">Contact me here on the site</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/blog">Read my blog posts & comment!</Link>
                </span>
              </li>
              <li>
                <span>
                  Check out my social media accounts
                  <span aria-label="to the right" role="img">
                    {' '}
                    👉
                  </span>
                  {' '}
                  or
                  <span aria-label="in the footer" role="img">
                    👇
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <aside className={styles.aside}>
          <h2>tl;dr:</h2>
          <h3 className={styles.resume_link}>
            <a href="/PeterValadez_resume.pdf">
              <Icon icon={filePdfFilled} />
              {' '}
              Resume
            </a>
          </h3>
          <h3>Social Media:</h3>
          <ul>
            <li>
              <p>
                <a href={infoData.contact.github.url}>
                  <Icon
                    icon={githubIcon}
                    aria-hidden="true"
                    className={`${styles.social_icon} github_icon`}
                  />
                  GitHub:
                  {' '}
                  {infoData.contact.github.handle}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={infoData.contact.linkedin_url}>
                  <Icon
                    icon={linkedinIcon}
                    aria-hidden="true"
                    className={styles.social_icon}
                  />
                  Linkedin
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={infoData.contact.stackoverflow_url}>
                  <Icon
                    icon={stackoverflowIcon}
                    aria-hidden="true"
                    className={styles.social_icon}
                  />
                  Stack Overflow
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={infoData.contact.devto_url}>
                  <Icon
                    icon={devToIcon}
                    aria-hidden="true"
                    className={`${styles.social_icon} twitter_icon`}
                  />
                  Dev.to
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href={infoData.contact.twitter.url}>
                  <Icon
                    icon={twitterIcon}
                    aria-hidden="true"
                    className={`${styles.social_icon} devto_icon`}
                  />
                  Twitter: @
                  {infoData.contact.twitter.handle}
                </a>
              </p>
            </li>
          </ul>
        </aside>
      </section>
      <section className={styles.portfolio}>
        <h2>Some of my Past Work</h2>
        <PortfolioSlider />
      </section>
      <h2>About this site</h2>
      <div
          // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: infoData.description }}
      />
      <div
          // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: infoData.cta }}
      />
    </Layout>
  );
}

export const query = graphql`
  query images {
    portrait: file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        id
        fixed(height: 200, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gears: file(relativePath: { eq: "bill-oxford--fGqsewtsJY-unsplash.jpg" }) {
      childImageSharp {
        id
        fixed(height: 200, width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
