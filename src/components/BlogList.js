import React from "react"
import { Link } from "gatsby"
import useBlogData from "../hooks/useBlogData"
import styles from "../styles/components/bloglist.module.scss"
import Img from 'gatsby-image'

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link className={styles.link} to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li className={styles.article} key={blog.node.fields.slug} role="article">
                  <div className={styles.list__hero}>
                    <Img 
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div className={styles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      </>
    )
  }
  return (
    <ul className={styles.list}>{renderBlogData()}</ul>
  )
}

