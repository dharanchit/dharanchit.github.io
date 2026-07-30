import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        I started my career as a manufacturing engineer before making the
        jump into software development. Since then I&apos;ve worked mostly
        as a full stack developer, spending most of my time in React and
        Node, with some Django mixed in depending on the project.
      </p>
      <p>
        I like taking things apart to understand how they work — that was
        true on the factory floor, and it&apos;s just as true staring at a
        stack trace at midnight. This site is where I write about whatever
        I&apos;m building or learning at the moment.
      </p>
      <h2>Outside of work</h2>
      <p>
        When I&apos;m not at a keyboard, I&apos;m usually playing basketball,
        tinkering with side projects, or working through coding problems for
        fun.
      </p>
    </Layout>
  )
}

export default About

export const Head = () => <title>About · Anchit Dhar</title>
