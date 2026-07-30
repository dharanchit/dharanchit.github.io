import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <section style={{ padding: "var(--space-3) 0 var(--space-4)" }}>
        <h1>Hi, I&apos;m Anchit.</h1>
        <p>
          I&apos;m a full stack developer who started out as a manufacturing
          engineer before moving into software. I build things with React,
          Node, and Django, and write here about what I&apos;m learning along
          the way.
        </p>
        <p>
          Have a look at <Link to="/blog">what I&apos;ve been writing</Link>,
          read a bit <Link to="/about">about me</Link>, or{" "}
          <Link to="/contact">get in touch</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default Home

export const Head = () => <title>Anchit Dhar</title>
