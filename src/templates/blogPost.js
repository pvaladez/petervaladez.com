import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Comments from "../components/Comments"
import styles from "../styles/templates/blogPost.module.scss"
import { Icon } from "@iconify/react"
import arrowLeft from "@iconify/icons-codicon/arrow-left"
import arrowRight from "@iconify/icons-codicon/arrow-right"
/* import ThemeProvider from '../components/ThemeProvider'; */

export default function Blog({ data, pageContext }) {
  const { next, previous } = pageContext
  const postData = data.markdownRemark
  const page = {
    title: postData.frontmatter.title + "· Petervaladez",
    description: postData.frontmatter.title,
    path: postData.fields.slug,
    image: postData.frontmatter.thumb_image.childImageSharp.fixed.src,
  }
  const commentBox = React.createRef()

  return (
    <Layout page={page} containerClass={styles.content}>
      <article className={styles.blog}>
        <header className={styles.blog__header}>
          <figure className={styles.blog__thumb}>
            <Img
              fixed={postData.frontmatter.thumb_image.childImageSharp.fixed}
              alt={postData.frontmatter.title} fadeIn={false} loading="eager"
            />
          </figure>
          <div className={styles.blog__info}>
            <h1>{postData.frontmatter.title}</h1>
            <h4 className={styles.post_date}>
              <time dateTime={postData.frontmatter.isoDate}>
                {postData.frontmatter.date}
              </time>
              <time dateTime={`PT${postData.timeToRead}M`}>
                {` · ${postData.timeToRead} min read ☕`}
              </time>
            </h4>
          </div>
        </header>
        <section
          className={styles.blog__body}
          dangerouslySetInnerHTML={{ __html: postData.html }}
        ></section>
        <footer className={styles.blog__footer}>
          <Link
            to={`/blog/${previous !== null ? previous.fields.slug : ""}`}
            className={styles.footer__prev}
          >
            <Icon icon={arrowLeft} />
            <h4>
              {previous !== null ? previous.frontmatter.title : "All Blogs"}
            </h4>
            <h6>{previous !== null ? previous.frontmatter.date : "🚀"}</h6>
          </Link>
          {/* I am the only author for now... not needed:
          <h2>
            Written By: {postData.frontmatter.author}
          </h2> */}
          <Link
            to={`/blog/${next !== null ? next.fields.slug : ""}`}
            className={styles.footer__next}
          >
            <Icon icon={arrowRight} />
            <h4>{next !== null ? next.frontmatter.title : "All Blogs"}</h4>
            <h6>{next !== null ? next.frontmatter.date : "🚀"}</h6>
          </Link>
        </footer>
      </article>
      <section className={styles.comment_section}>
        <h2 className={styles.comments_title}>Comments:</h2>
        <Comments commentBox={commentBox} />
      </section>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        thumb_image {
          childImageSharp {
            fixed(width: 150, height:150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      html
      timeToRead
      fields {
        slug
      }
    }
  }
`
