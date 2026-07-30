import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        Sorry, there&apos;s nothing here.{" "}
        {process.env.NODE_ENV === "development" ? (
          <>
            Try creating a page in <code>src/pages/</code>.{" "}
          </>
        ) : null}
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Not found" pathname="/404" />
