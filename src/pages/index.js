import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <section style={{ padding: "var(--space-3) 0 var(--space-4)" }}>
        <h1>Hi, I&apos;m Anchit.</h1>
        <p
          style={{
            color: "var(--color-text-muted)",
            marginTop: "calc(var(--space-2) * -1)",
          }}
        >
          Senior Software Engineer · Bengaluru
        </p>
        <p>
          I build high-throughput fintech systems and AI-driven platforms.
          I currently work as an Applied AI Engineer, focused on LLM
          orchestration and multi-agent systems, after building trading and
          investment products in Go, React, and Kafka.
        </p>
        <p>
          Have a look at <Link to="/blog">what I&apos;ve been writing</Link>,
          read more <Link to="/about">about me</Link>, or{" "}
          <Link to="/contact">get in touch</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default Home

export const Head = () => <title>Anchit Dhar</title>
