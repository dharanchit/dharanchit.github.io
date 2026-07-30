import React from "react"
import * as styles from "./footer.module.css"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span>&copy; {year} Anchit Dhar</span>
      <span className={styles.links}>
        <a href="https://github.com/dharanchit" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/anchitdhar/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </span>
    </footer>
  )
}

export default Footer
