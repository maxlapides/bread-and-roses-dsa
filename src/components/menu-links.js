import React from "react"
import { Link } from "gatsby"

const MenuLinks = ({ menuLinks }) => (
  <>
    {menuLinks.map(link => (
      <Link to={link.link} key={link.name}>
        {link.name}
      </Link>
    ))}
    <a
      href="https://socialistcall.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Call
    </a>
    <a
      href="https://forms.gle/M6vVT4JQTJQcr7Tf8"
      target="_blank"
      rel="noopener noreferrer"
    >
      Join Bread &amp; Roses
    </a>
  </>
)

export default MenuLinks
