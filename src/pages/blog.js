import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
/* import ThemeProvider from '../components/ThemeProvider'; */
import styles from '../styles/pages/blog.module.scss';

export default function Blog() {
  const page = {
    title: "Blog List | Petervaladez.com",
    description: "All blogs on Petervaladez.com",
    path: "/blog"
  };
  return (
      <Layout page={page} contentClass={styles.content} >
        <BlogList />
      </Layout>
  )
}
