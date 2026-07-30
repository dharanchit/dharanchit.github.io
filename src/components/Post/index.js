import React from "react"
import { Link } from "gatsby"
import Layout from "../Layout"
import * as styles from "./post.module.css"

const formatDate = dateString =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })

const Post = ({ title, date, children }) => {
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p className={styles.meta}>{formatDate(date)}</p>
        {children}
        <Link to="/blog" className={styles.backLink}>
          &larr; Back to all posts
        </Link>
      </article>
    </Layout>
  )
}

export default Post
