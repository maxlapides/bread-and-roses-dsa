import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/bread-and-roses.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo className="logo" />
  </Layout>
)

export default IndexPage
