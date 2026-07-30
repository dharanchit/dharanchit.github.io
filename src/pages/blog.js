import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { posts } from "../data/posts"
import * as styles from "./blog.module.css"

const formatDate = dateString =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      {posts.map(post => (
        <section key={post.slug} className={styles.post}>
          <h2 className={styles.title}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className={styles.date}>{formatDate(post.date)}</p>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </section>
      ))}
    </Layout>
  )
}

export default Blog

export const Head = () => <title>Blog · Anchit Dhar</title>
