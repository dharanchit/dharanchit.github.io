import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { posts } from "../data/posts"

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
        <section key={post.slug} style={{ marginBottom: "var(--space-4)" }}>
          <h2 style={{ marginBottom: "var(--space-1)" }}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.85rem",
              margin: "0 0 var(--space-1)",
            }}
          >
            {formatDate(post.date)}
          </p>
          <p style={{ margin: 0 }}>{post.excerpt}</p>
        </section>
      ))}
    </Layout>
  )
}

export default Blog

export const Head = () => <title>Blog · Anchit Dhar</title>
