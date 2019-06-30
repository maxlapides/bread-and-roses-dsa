import React from "react"
import { Link } from "react-scroll"

const InternalLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={window.innerHeight >= 100 ? -32 : -62}
    spy
    hashSpy
  >
    {children}
  </Link>
)

export default InternalLink
