import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "./index.module.css"

const Home = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Hi, I&apos;m Anchit.</h1>
        <p className={styles.role}>
          <span className={styles.dot} />
          Senior Software Engineer · Bengaluru
        </p>
        <p>
          I build high-throughput fintech systems and AI-driven platforms.
          I currently work as an Applied AI Engineer, focused on LLM
          orchestration and multi-agent systems, after building trading and
          investment products in Go, React, and Kafka.
        </p>
        <p className={styles.links}>
          Have a look at <Link to="/blog">what I&apos;ve been writing</Link>,
          read more <Link to="/about">about me</Link>, or{" "}
          <Link to="/contact">get in touch</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default Home

export const Head = () => (
  <Seo description="Senior software engineer working on high-throughput fintech systems and AI-driven platforms." />
)
