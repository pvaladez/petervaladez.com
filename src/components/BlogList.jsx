import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import useBlogData from '../hooks/useBlogData';
import styles from '../styles/components/bloglist.module.scss';

export default function BlogList() {
  const blogData = useBlogData();
  function renderBlogData() {
    return (
      <>
        {blogData
          .filter((blog) => blog.node.frontmatter.title !== '')
          .map((blog) => (
            <li className={styles.article} role="article" key={blog.node.id}>
              <Link
                className={styles.link}
                to={`/blog/${blog.node.fields.slug}`}
                key={blog.node.fields.slug}
              >
                <div className={styles.list__hero}>
                  <Img
                    fixed={
                        blog.node.frontmatter.thumb_image.childImageSharp.fixed
                      }
                    alt={blog.node.frontmatter.title}
                    fadeIn={false}
                    loading="eager"
                  />
                </div>
                <div className={styles.list__info}>
                  <h3 className={styles.title}>
                    {blog.node.frontmatter.title}
                  </h3>
                  <h4 className={styles.date}>
                    {blog.node.frontmatter.date}
                  </h4>
                  <p>{blog.node.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
      </>
    );
  }
  return <ul className={styles.list}>{renderBlogData()}</ul>;
}
