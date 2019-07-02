import React from "react"
import { Link } from "gatsby"

import ExternalLink from "./external-link"

const MenuLinks = ({ menuLinks }) => (
  <>
    {menuLinks.map(link => (
      <Link to={link.link} key={link.name}>
        {link.name}
      </Link>
    ))}
    <ExternalLink href="https://socialistcall.com/">The Call</ExternalLink>
    <ExternalLink href="https://forms.gle/M6vVT4JQTJQcr7Tf8">
      Join Bread &amp; Roses
    </ExternalLink>
  </>
)

export default MenuLinks
