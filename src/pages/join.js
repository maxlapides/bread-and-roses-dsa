import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"

const JoinPage = () => (
  <Layout title="Join Bread &amp; Roses" color="yellow" heroImageName="index">
    <SEO title="Join Bread &amp; Roses" ogImage="home" titleTemplate={`%s`} />
    <div className="content">
      <iframe
        src="https://airtable.com/embed/shr1pdmCIC6JShvFH?backgroundColor=green"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="1800"
      />
    </div>
  </Layout>
)

export default JoinPage
