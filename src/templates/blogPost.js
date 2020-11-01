import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import DOMPurify from 'dompurify';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify/icons-codicon/arrow-left';
import arrowRight from '@iconify/icons-codicon/arrow-right';
import Layout from '../components/Layout';
import Comments from '../components/Comments';
import styles from '../styles/templates/blogPost.module.scss';
/* import ThemeProvider from '../components/ThemeProvider'; */

export const blogPost = ({ data, pageContext }) => {
  /* { next } from graphql is actually the chronologically previous post & vice versa */
  const { next: prevPost, previous: nextPost } = pageContext;
  const postData = data.markdownRemark;
  const page = {
    title: `${postData.frontmatter.title}· Petervaladez`,
    description: postData.frontmatter.title,
    path: postData.fields.slug,
    image: postData.frontmatter.thumb_image.childImageSharp.fixed.src,
  };
  const commentBox = React.createRef();

  return (
    <Layout page={page} containerClass={styles.content}>
      <article className={styles.blog}>
        <header className={styles.blog__header}>
          <figure className={styles.blog__thumb}>
            <Img
              fixed={postData.frontmatter.thumb_image.childImageSharp.fixed}
              alt={postData.frontmatter.title}
              fadeIn={false}
              loading="eager"
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
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postData.html) }}
        />
        <footer className={styles.blog__footer}>
          <Link
            to={`/blog/${prevPost !== null ? prevPost.fields.slug : ''}`}
            className={styles.footer__prev}
          >
            <Icon icon={arrowLeft} />
            <h4>
              {prevPost !== null ? prevPost.frontmatter.title : 'All Blogs'}
            </h4>
            <h5>{prevPost !== null ? prevPost.frontmatter.date : '🚀'}</h5>
          </Link>
          {/* I am the only author for now... not needed:
          <h2>
            Written By: {postData.frontmatter.author}
          </h2> */}
          <Link
            to={`/blog/${nextPost !== null ? nextPost.fields.slug : ''}`}
            className={styles.footer__next}
          >
            <Icon icon={arrowRight} />
            <h4>
              {nextPost !== null ? nextPost.frontmatter.title : 'All Blogs'}
            </h4>
            <h5>{nextPost !== null ? nextPost.frontmatter.date : '🚀'}</h5>
          </Link>
        </footer>
      </article>
      <section className={styles.comment_section}>
        <h2 className={styles.comments_title}>Comments:</h2>
        <Comments commentBox={commentBox} />
      </section>
    </Layout>
  );
};

export default blogPost;

// dynamic page query, must occur within each post context
// $slug is made available by context from createPages call in gatsby-node.js
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
            fixed(width: 150, height: 150) {
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
`;
