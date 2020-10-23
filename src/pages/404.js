import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import styles from '../styles/pages/404.module.scss'

export default function NotFound() {
    const page = {
        title: "Not Found · Petervaladez",
        description: "Not Found at Petervaladez.com",
        path: "/404"
      };
    return (
        <Layout page={page}>
            <div className={styles.notFound__container}>
                <Link to="/">
                    <h1>Sorry, couldn't find that page.</h1>
                </Link>
            </div>
        </Layout>
    )
}