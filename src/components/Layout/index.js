import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
