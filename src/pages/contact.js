import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The easiest way to reach me is over{" "}
        <a
          href="https://www.linkedin.com/in/anchitdhar/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        , or by email at{" "}
        <a href="mailto:anchitdhar1@gmail.com">anchitdhar1@gmail.com</a>.
      </p>
    </Layout>
  )
}

export default Contact

export const Head = () => (
  <Seo
    title="Contact"
    description="Get in touch with Anchit Dhar."
    pathname="/contact"
  />
)
