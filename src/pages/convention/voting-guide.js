import React from "react"
import { Element } from "react-scroll"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ExternalLink from "../../components/external-link"
import InternalLink from "../../components/internal-link"

const VotingGuide = () => (
  <Layout title="Voting Guide" color="yellow">
    <SEO title="Voting Guide" />

    <div className="sidebar">
      <h2>Outline</h2>
      <ul>
        <li>
          <InternalLink to="our-resolutions">Our Resolutions</InternalLink>

          <ul>
            <li>
              <InternalLink to="resolution-31">Resolution #31</InternalLink>
            </li>
            <li>
              <InternalLink to="resolution-32">Resolution #32</InternalLink>
            </li>
            <li>
              <InternalLink to="resolution-33">Resolution #33</InternalLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div className="content">
      <Element name="our-resolutions" id="our-resolutions">
        <h2>Our Resolutions</h2>

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
          While these are the resolutions we have decided to collectively
          endorse so far, we may endorse additional resolutions in the weeks to
          come, including resolutions that were written by caucus members but
          did not undergo the collective drafting and approval process that the
          three above did, and resolutions written by members outside of our
          caucus. We also will likely propose some amendments to other
          resolutions and changes to DSA&rsquo;s constitution and bylaws.
        </p>
      </Element>

      <Element name="resolution-31" id="resolution-31">
        <h3>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLScKg8Tt2GMsGwzA4BTUJL58KkWicg_IXAABV_G8Tv2tDxat0g/viewform">
            Resolution #31: Class-Struggle Elections
          </ExternalLink>
        </h3>

        <p>
          Since Trump&rsquo;s election,{" "}
          <ExternalLink href="https://socialistcall.com/2018/08/16/bernie-2020/">
            Bernie Sanders&rsquo;s
          </ExternalLink>{" "}
          popularity has only risen. We have also seen a small but significant
          shift in favor of down-ballot class-struggle electoral candidates like
          Rashida Tlaib, Alexandria Ocasio-Cortez, Julia Salazar, Jovanka
          Beckles, Lee Carter, and the{" "}
          <ExternalLink href="https://socialistcall.com/2019/05/02/chicago-will-be-ours/">
            Chicago City Council slate
          </ExternalLink>
          .
        </p>

        <p>
          Just as with the strike wave, we see this as a very promising
          development. But again, to build the movement we need, we need to grow
          our capacity exponentially. That&rsquo;s why we&rsquo;re proposing a
          clear set of criteria for national DSA endorsement as well as a
          candidate pipeline program to help DSA develop strong class-struggle
          candidates. We see class-struggle candidates as those who &ldquo;use
          elections, public offices, and legislation as vehicles to encourage
          working-class organization, promote progressive legislation, and build
          support for democratic socialist ideas.&rdquo; The resolution also
          asks the organization to orient our work towards the Bernie Sanders
          campaign in a way that builds independent working class power, whether
          Bernie ultimately wins or loses.
        </p>
      </Element>

      <Element name="resolution-32" id="resolution-32">
        <h3>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLScvTihWiHZcv9rKsI_2EHN9nRRhG3kPOHGSuJjNl9lcB8tICw/viewform">
            Resolution #32: Labor Strategy and the DSLC
          </ExternalLink>
        </h3>

        <p>
          In the past two years we have seen a major upswing in labor militancy
          across the country. In many cases, DSA members played leading roles in
          organizing strikes and other collective action. But to truly build a
          strong working class movement, workers will have to fight the boss
          even more frequently and even more aggressively.
        </p>

        <p>
          Our resolution on labor organizing and the DSLC will build DSA&rsquo;s
          capacity to identify, train, and connect{" "}
          <ExternalLink href="https://socialistcall.com/2019/05/03/workers-have-the-power/">
            worker-leaders
          </ExternalLink>{" "}
          who are already DSA members. It will also provide support for those
          members who want to{" "}
          <ExternalLink href="https://socialistcall.com/2019/05/24/rank-and-file-strategy-union-socialism/">
            find rank-and-file union jobs
          </ExternalLink>{" "}
          in order to bring their politics to work, fight the boss with their
          coworkers, and help to root the socialist movement in the working
          class over the long term.{" "}
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLScvTihWiHZcv9rKsI_2EHN9nRRhG3kPOHGSuJjNl9lcB8tICw/viewform">
            Read more and sign on as a sponsor here!
          </ExternalLink>
        </p>
      </Element>

      <Element name="resolution-33" id="resolution-33">
        <h3>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSdZjxbBWdYgXIl1PtZqLZrwbSJ2xjs82soCqj9rBdXuDQjx_w/viewform">
            Resolution #33: Invest in Political Education
          </ExternalLink>
        </h3>
        <p>
          We should all be proud of DSA&rsquo;s enormous growth and its outsized
          impact over the last few years. To build a durable movement, we need
          to improve our collective ability to analyze the strengths and
          weaknesses of our movement and capitalist class rule. We also need to
          better understand the history of and debates within the socialist
          movement.&nbsp;
        </p>

        <p>
          That is why we are proposing a resolution to consolidate and develop
          political education materials and to make them more easily accessible
          to chapters. By taking what materials they find useful, and modifying
          them as they wish, chapters can avoid spending time reinventing the
          wheel. This will both make political education more accessible to more
          members, and free up time at the chapter level for other organizing
          tasks.{" "}
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSdZjxbBWdYgXIl1PtZqLZrwbSJ2xjs82soCqj9rBdXuDQjx_w/viewform">
            Please sign on to support the resolution here!
          </ExternalLink>
        </p>
      </Element>
    </div>
  </Layout>
)

export default VotingGuide
