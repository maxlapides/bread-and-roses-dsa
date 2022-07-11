import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout title="Archive" color="red" heroImageName="index">
    <SEO title="Archive" ogImage="home" titleTemplate={`%s`} />
    <div className="content">
      <h2>National Convention 2021</h2>
      <ul>
        <li>
          <Link to="/archive/convention-2021/overview">Overview</Link>
        </li>
        <li>
          <Link to="/archive/convention-2021/slate">NPC Slate</Link>
        </li>
        <li>
          <Link to="/archive/convention-2021/resolutions">Resolutions</Link>
        </li>
        <li>
          <Link to="/archive/convention-2021/vision">Convention Vision</Link>
        </li>
      </ul>

      <h2>DSLC Election 2020</h2>
      <ul>
        <li>
          <Link to="/archive/dslc-slate-2020/">DSLC Slate 2020</Link>
        </li>
      </ul>

      <h2>National Convention 2019</h2>
      <ul>
        <li>
          <Link to="/archive/convention-2019/npc-slate/">NPC Slate</Link>
        </li>
        <li>
          <Link to="/archive/convention-2019/our-proposals/">
            Our Proposals
          </Link>
        </li>
        <li>
          <Link to="/archive/convention-2019/our-endorsements/">
            Our Endorsements
          </Link>
        </li>
        <li>
          <Link to="/archive/convention-2019/follow-the-debates/">
            Follow the Debates
          </Link>
        </li>
      </ul>

      <h2>Tasks for 2019</h2>
      <ul>
        <li>
          <Link to="/archive/tasks-2019/">Tasks for 2019</Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
