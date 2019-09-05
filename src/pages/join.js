import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
