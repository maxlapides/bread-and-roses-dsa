import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"

const IndexPage = () => (
  <Layout title="Democratic Socialism for the many" color="red">
    <SEO title="Home" />
    <div className="content content-full-width">
      <p>
        Bread &amp; Roses is a national caucus of Marxist organizers in the
        Democratic Socialists of America committed to helping build an effective
        DSA rooted in the multiracial working class.
      </p>
      <p>
        From the{" "}
        <ExternalLink href="https://www.jacobinmag.com/2018/05/west-virginia-teachers-strikes-militant-minority-healthcare">
          teachers&rsquo; strikes
        </ExternalLink>{" "}
        to socialist victories at the ballot box, a new{" "}
        <ExternalLink href="http://socialistcall.com/2018/08/16/bernie-2020/">
          Bernie Sanders
        </ExternalLink>{" "}
        campaign, and the stunning rebirth of DSA, independent class politics is
        back. For the first time in generations, it&rsquo;s possible to make
        socialism a mainstream part of U.S. political life. And doing so is
        needed now more than ever if we want to defeat Trumpism, rebuild a{" "}
        <ExternalLink href="https://www.jacobinmag.com/2019/03/rank-and-file-strategy-union-organizing">
          militant
        </ExternalLink>{" "}
        labor movement, win{" "}
        <ExternalLink href="http://socialistcall.com/2018/10/26/why-we-fight-for-medicare-for-all/">
          Medicare for All
        </ExternalLink>{" "}
        and a{" "}
        <ExternalLink href="https://jacobinmag.com/2019/03/green-new-deal-class-struggle-organizing">
          Green New Deal
        </ExternalLink>
        , fight for{" "}
        <ExternalLink href="http://socialistcall.com/2018/09/07/class-politics-and-the-fight-against-oppression/">
          equality
        </ExternalLink>{" "}
        and liberation for all oppressed people, and end the{" "}
        <ExternalLink href="https://www.jacobinmag.com/2017/01/democratic-party-campaign-fundraising-wasserman-schultz">
          Democratic Party's
        </ExternalLink>{" "}
        chokehold on progressive politics.
      </p>
      <p>
        The Left doesn&rsquo;t get an opening like this very often &mdash;
        it&rsquo;s important that we{" "}
        <ExternalLink href="http://socialistcall.com/2019/01/01/mayflies-and-mass-strikes/">
          seize it
        </ExternalLink>{" "}
        fully.
      </p>
      <p>
        We in Bread &amp; Roses are convinced that DSA has the potential to
        become a vehicle for working people to effectively take on and beat the
        billionaire class. This will require organizing local and national
        struggles that can win tangible gains in the lives of millions &mdash;
        and, in this process, promoting a compelling vision and strategy for{" "}
        <ExternalLink href="http://socialistcall.com/2018/09/26/what-is-democratic-socialism/">
          democratic socialist
        </ExternalLink>{" "}
        transformation. As a big tent organization in a country with a wide
        range of political contexts, the specifics of what this looks like will
        vary from place to place. But the common thread is mass politics and{" "}
        <ExternalLink href="http://socialistcall.com/2018/08/16/liberalism-ultraleftism-or-mass-action/">
          mass action
        </ExternalLink>
        . Without such an approach, DSA will continue to struggle to root itself
        in the multiracial working class.
      </p>
      <p>
        Bread and Roses&rsquo;s politics and perspectives are outlined in our{" "}
        <Link to="/where-we-stand/">Where We Stand</Link> and{" "}
        <Link to="/tasks/">Tasks for 2019</Link> documents. We strongly
        encourage active DSA members who agree with our point of view and
        strategy to consider{" "}
        <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLScNRnmrJ78L7hwxiHUVEfJHk-jTUKjAO1qfTZQaAW0JVQPg5A/viewform">
          joining our caucus
        </ExternalLink>
        .
      </p>
    </div>
  </Layout>
)

export default IndexPage
