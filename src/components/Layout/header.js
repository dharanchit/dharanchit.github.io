import React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

const links = [
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Anchit Dhar
      </Link>
      <nav className={styles.nav}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            activeClassName={styles.navActive}
            className={styles.navLink}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
