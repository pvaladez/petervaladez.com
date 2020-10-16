import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
/* import ThemeProvider from '../components/ThemeProvider'; */
import styles from '../styles/pages/blog.module.scss';

export default function Blog() {
  return (
      <Layout page="Blog" contentClass={styles.content}>
        <BlogList />
      </Layout>
  )
}
