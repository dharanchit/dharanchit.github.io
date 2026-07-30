import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

const Seo = ({ title, description, pathname = "/" }) => {
  const { site } = useStaticQuery(query)
  const { title: siteTitle, description: siteDescription, siteUrl } =
    site.siteMetadata

  const pageTitle = title ? `${title} · ${siteTitle}` : siteTitle
  const pageDescription = description || siteDescription
  const url = `${siteUrl}${pathname}`
  const image = `${siteUrl}/icons/icon-512x512.png`

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
    </>
  )
}

export default Seo
