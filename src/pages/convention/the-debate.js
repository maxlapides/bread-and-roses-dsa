import React from "react"
import { Element } from "react-scroll"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ExternalLink from "../../components/external-link"

const VotingGuide = () => (
  <Layout title="The Debate" color="yellow" heroImageName="convention">
    <SEO title="The Debate" />

    <div className="content">
      <Element name="the-debate" id="the-debate">
        <p>
          We in DSA&rsquo;s <Link to="/">Bread &amp; Roses</Link> caucus are
          excited to share three resolutions we drafted collectively for the
          2019 DSA National Convention, one on labor organizing and the DSLC,
          one on class-struggle election campaigns, and one on investing greater
          resources in political education. Bread &amp; Roses is also proud to
          endorse the Ecosocialist Working Group&rsquo;s{" "}
          <ExternalLink href="https://docs.google.com/document/d/1QpxsM7ZZS7-NbFN80UKsJyDDPtkID_AbFdeBzzblMTs/edit">
            Green New Deal Resolution
          </ExternalLink>
          .&nbsp;
        </p>

        <p>
          These three resolutions and our support of the GND resolution are
          based on our analysis of DSA&rsquo;s{" "}
          <Link to="/tasks/">immediate tasks</Link> for the next one to two
          years.
        </p>

        <p>
          We&rsquo;re asking for DSA members&rsquo;{" "}
          <ExternalLink href="http://bit.ly/BnRResolutions">
            feedback and support
          </ExternalLink>
          , especially if you&rsquo;re going to be a delegate to the convention.
          Please sign on!
        </p>

        <p>
          We&rsquo;re also proud to share an amendment to strengthen DSA&rsquo;s
          dues sharing program that supports small and new chapter.
        </p>

        <p>
          While these are the proposals we have decided to collectively endorse
          so far, we may endorse additional resolutions in the weeks to come,
          including resolutions that were written by caucus members but did not
          undergo the collective drafting and approval process that the three
          above did, and resolutions written by members outside of our caucus.
        </p>
      </Element>

      
    </div>
  </Layout>
)

export default VotingGuide
