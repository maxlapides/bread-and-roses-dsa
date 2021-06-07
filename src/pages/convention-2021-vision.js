import React from "react"
import { Element } from "react-scroll"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"

const Convention2021Vision = ({ data }) => (
  <Layout
    title="Convention 2021 Vision"
    color="blue"
    heroImageName="convention-2021"
  >
    <SEO title="Convention 2021 Vision" ogImage="where-we-stand" />

    <div className="content">
      <h2>Plan for a Powerful DSA</h2>
      <p>
        As DSA has grown from a 5,000 member organization to nearly 100,000,
        we’ve taken on and won fights unimaginable even a few years ago. We have
        a lot to be proud of. But we must set our sights much higher if we’re
        going to win the radical social transformations that our class and our
        world so urgently need.
      </p>
      <p>
        To defeat the billionaires and the bi-partisan political establishment,
        we need a big-tent DSA of hundreds of thousands of organizers, a mass
        organization of and for the multiracial working-class. A DSA that elects
        thousands of socialist organizers to office at all levels who are
        fighting to not only pass labor, racial, and climate justice demands,
        but to root democratic socialism in working-class communities across the
        country. A DSA that coordinates tens of thousands of labor activists
        engaged in their workplaces and unions, capable of expanding and
        transforming the labor movement into a militant, democratic, and
        powerful vehicle for rank-and-file power and class struggle.
      </p>
      <p>
        Bread &amp; Roses envisions a DSA that is strong, democratic, and
        powerful at every level. We want to see chapters that can move in
        concert with each other and with a national strategy, as well as take on
        their own local campaigns. We want to see a national leadership with
        more time and capacity to take on important strategic questions and
        long-term political planning. We want to see chapters capable of mapping
        their contexts and rooting themselves in them through collective
        struggle.
      </p>
      <p>
        But chapters often lack organizational support and political direction,
        even when their leaders and members want to take on ambitious projects
        and campaigns. The national organization is often divorced from local
        chapters, both in terms of organizational cohesion and political
        direction. Our national leadership, an entirely volunteer body, has had
        to navigate leading a quickly growing organization through turbulent
        political times just in their spare time. DSA, in many ways, still
        operates like that 5,000 member group it used to be.
      </p>
      <p>
        We need a DSA that has the resources, organizational capacity, and
        democratic structures locally and nationwide to drive forward our
        political work, to effectively link up and support our local chapters
        and mass campaigns, and to enable our organization and its leadership to
        truly reflect this country’s diverse working class.
      </p>
      <p>
        We are confident that this vision of a powerful DSA can become a
        reality. The following proposals — written by Bread &amp; Roses members
        as well as national DSA bodies in which we participate — would help us
        move in that direction over the coming years.
      </p>
      <Element name="working-class-power" id="working-class-power">
        <h2>
          DSA should build working-class power by prioritizing electoral and
          labor work
        </h2>
        <Img fluid={data.plank1.childImageSharp.fluid} />
        <p>
          Radical change and democratic socialism can only be won if a
          working-class movement leads the fight. History and recent experience
          show that electoral and labor work are the two main vehicles through
          which socialists can unleash this potential power.
        </p>
        <p>
          By waging class struggle through electoral and labor work, DSA can
          root itself in the working class and help win all the transformations
          urgently needed — from the Green New Deal, to Medicare for All, to
          defunding the police and immigrant rights — on the way to ending
          capitalism.
        </p>
        <h3>Electoral</h3>
        <p>
          Through campaigns to elect open socialists and use their campaigns and
          offices to organize the working class — what we call class-struggle
          elections — we believe we can build the independent political power we
          need to escalate our struggle. We should build these campaigns not
          only to win office and fight for urgently needed reforms, but also to
          build independent working-class organization by making new socialists
          and polarizing politics along class lines during and between electoral
          cycles.
        </p>
        <p>
          DSA chapters should encourage candidates to run and legislate as
          visible socialists, drawing lines between themselves and the
          capitalist controlled political establishment of both parties, in an
          effort to create visibility and consciousness of socialist politics
          for the sake of building working-class power, rooting DSA in the
          multiracial working class, and moving towards a mass independent party
          of and for the working class.
        </p>
        <p>
          <strong>
            Bread &amp; Roses supports the National Electoral Committee’s
            resolution
          </strong>{" "}
          <ExternalLink href="https://dsanec.github.io/resolution/">
            “Toward a Mass Working Class Party”
          </ExternalLink>
          &mdash;It’s important to turn DSA into a party-like electoral
          apparatus that can support the kind of work described above in all 50
          states. We need to identify and run DSA organizers across the country
          who can use their offices to root class struggle politics in their
          community.
        </p>
        <p>
          <ul>
            <li>
              <strong>At the chapter level</strong> this means developing a
              robust program to help chapters build Electoral Committees/Working
              Groups that can begin to develop short, medium and long-term plans
              in their chapters for DSA electoral campaigns as well as the
              skills to recruit and develop candidates and staff for campaigns.
            </li>
            <li>
              <strong>At the national level</strong> this means further
              developing the NEC (National Electoral Committee) fundraising and
              organizing capacity to support local working groups and a
              coordinated volunteer program to harness the power of DSA members
              in chapters who aren’t running electoral campaigns to help make
              the difference in critical DSA candidate races all over the
              country.
            </li>
            <li>
              <strong>National staff</strong> is crucial to carrying out this
              work. Electoral work has been woefully understaffed in DSA. The
              NEC needs electoral-specific staff to both help build national
              infrastructure and support chapters develop electoral
              infrastructure to be able to run socialists at all levels of
              government across the country.
            </li>
          </ul>
        </p>
        <h3>Labor</h3>
        <p>
          The workplace is where workers hold the greatest leverage in
          capitalist society — just by refusing to work we can halt the flow of
          profits and services that capitalism depends on for its survival.{" "}
        </p>
        <p>
          We believe that{" "}
          <ExternalLink href="https://www.jacobinmag.com/2019/03/rank-and-file-strategy-union-organizing">
            the rank-and-file strategy
          </ExternalLink>{" "}
          is key to transforming and revitalizing the labor movement. We can do
          this by identifying, developing, and expanding the layer of workplace
          leaders who are primed to fight the boss. This strategy is necessary
          for effectively fighting the boss, for transforming our unions into
          democratic vehicles for class struggle, for organizing millions of new
          workers, and for reconnecting socialism to the labor movement after
          decades of isolation.
        </p>
        <p>
          We support efforts to organize the unorganized and to win labor law
          reforms that would make it easier for workers to organize. But rather
          than providing a means of sidestepping the existing labor unions,
          these struggles reinforce the need to transform them. Any campaign to
          organize the unorganized at the necessary scale or pass meaningful
          labor legislation must involve existing unions, the only organizations
          with the resources and capacity to handle organizing of this scale. As
          the primary vehicles available for organizing large numbers of
          workers, existing unions need to be transformed into organizations
          capable of leading this charge.
        </p>
        <p>
          Bread &amp; Roses supports the Democratic Socialist Labor Commission’s
          resolution “Building Worker Power to Win Democratic Socialism: A Labor
          Strategy for DSA in 2021-2023” as a comprehensive labor resolution
          that has a perspective of the importance of rank and file power and
          union democracy throughout. We believe DSA needs to make labor a top
          priority and that the organization should work to:
        </p>
        <p>
          <ul>
            <li>
              Support bottom up efforts to transform the labor movement,
              including official DSA support for efforts like{" "}
              <ExternalLink href="https://uawd.org/">UAWD</ExternalLink>, etc.
            </li>
            <li>“Connect Our Comrades” through labor industry networks.</li>
            <li>
              Continue organizing in unorganized sectors through efforts like
              EWOC.
            </li>
            <li>
              Fight for transformative labor legislation––continuing to fight
              for, and build on the success of, our PRO Act campaign and
              encouraging chapters to run state-level campaigns for public
              sector bargaining rights and the right to strike, safe staffing
              legislation, etc.
            </li>
            <li>
              Placing a particular focus on organizing among Black and Brown
              workers.
            </li>
            <li>
              Turning DSA into a “Powerhouse of Solidarity” by standing in
              solidarity with all workers in struggle.
            </li>
            <li>
              Encourage DSA members to become rank-and-file union members.
            </li>
          </ul>
        </p>
        <p>
          Making this a robust national program means we need effective labor
          branches in chapters across the country. In our experience chapters
          are eager to engage in this kind of work, but often lack the
          experience to map their local terrain and make connections with unions
          and ongoing labor struggles. Empowering chapters to do this kind of
          work will require the DSLC to:
        </p>
        <p>
          <ul>
            <li>
              Develop a robust program to train chapters to map out their local
              labor movement enabling them to construct calendars of expiring
              union contracts so they can proactively put together solidarity
              campaigns.
            </li>
            <li>
              Coordinate important national labor disputes and proactively plan
              for nationwide solidarity campaigns.
            </li>
          </ul>
        </p>
        <p>
          As with our electoral work, the DSLC must be supported by additional
          organizing staff dedicated to making these programs happen.
        </p>
      </Element>

      <Element
        name="socialism-rooted-in-working-class"
        id="socialism-rooted-in-working-class"
      >
        <h2>
          DSA must be a visible tribune for socialism and root itself in the
          multiracial working class
        </h2>
        <Img fluid={data.plank2.childImageSharp.fluid} />
        <p>
          DSA is disportionately highly educated, white, and professional,
          especially in major urban areas. We can and must transform DSA into an
          organization of and for the multiracial working class through
          strategic organizing. As opposed to our current relatively
          self-selecting recruitment approach, DSA can proactively recruit
          workers and develop their leadership in the process of organizing
          campaigns that make a material difference in the lives of ordinary
          people.
        </p>
        <p>
          Much of this will be done in the context of electoral and labor
          struggles discussed above, and by investing in political education and
          by scaling up our public communication work. But carrying out this
          strategy will also require substantial resources and a particular
          focus on organizing beyond DSA’s current demographic base:
        </p>
        <p>
          <ul>
            <li>
              Chapter Offices and Chapter Staff––DSA Chapters should be built
              into permanent and visible hubs of community organizing. In order
              to ensure chapters have the resources to make this happen, Bread
              &amp; Roses is putting forward a{" "}
              <ExternalLink href="https://docs.google.com/document/d/1hexVaR046oZF-RnBSijv2WMgN80WlCSONhep85uopus/edit?usp=sharing">
                Resolution to Strengthen DSA From the Bottom Up Through National
                Matching Funds for Chapters to Hire Staff and Open Offices
              </ExternalLink>
              . Hiring chapter staff can dramatically expand chapters’ capacity
              for serious day to day organizing work, lessen the administrative
              burden on volunteer leaders, and help us build a durable presence
              in our communities.
            </li>
            <li>
              Bread &amp; Roses members have worked with many DSA members of
              different tendencies on DSA’s Growth and Development Committee and
              we are proud to support the{" "}
              <ExternalLink href="https://docs.google.com/document/d/1mfQkXDU2732CCiBp6ztp6GpyuGT9AXdzYQ0YeHWuCtI/edit?usp=sharing">
                Beyond 100K Resolution
              </ExternalLink>{" "}
              they drafted to put forward to the 2021 Convention that calls on
              the organization to continue growing by training people to recruit
              their co-workers, building YDSA chapters in historically black
              colleges and universities and community colleges, and recruiting
              from the broader working class.
            </li>
            <li>
              Building a truly multiracial socialist movement capable of uniting
              working people against our common enemies requires fighting not
              only for the demands that affect all workers, but also for demands
              that address specific instances of wage theft, housing
              discrimination, and other sources of oppression. That is why Bread
              &amp; Roses is putting forward a{" "}
              <ExternalLink href="https://docs.google.com/document/d/1DJ39rmzUb8wYCyqwvk9RptrF-w5l79wUgUII-EbE93c/edit?usp=sharing">
                Resolution to Form a National Committee for Reparations to Black
                People
              </ExternalLink>{" "}
              to help DSA develop and promote its socialist vision for winning
              reparations from the federal government for Black people in
              response to slavery, Jim Crow, and redlining.
            </li>
            <li>
              Support and grow YDSA — The socialist movement depends on
              recruiting and training lifelong socialists, and YDSA is a crucial
              part of this. On historically black colleges and universities and
              community college campuses, YDSA has recruited working-class and
              POC organizers. Further, YDSA has established a pipeline for
              students to get rank-and-file jobs and work to strengthen and
              democratize the labor movement. Bread &amp; Roses supports the{" "}
              <ExternalLink href="https://docs.google.com/document/d/1ZypTHrIUw2GSbb8xGMy-Dq-UItytl3O_ZXoa00zV12o/edit?usp=sharing">
                Resolution to Strengthen YDSA
              </ExternalLink>
              , which would give YDSA leadership a bigger role in
              decision-making over its budget, more resources for building up
              the YDSA Mentor program, and more say over YDSA staffing
              decisions.
            </li>
          </ul>
        </p>
      </Element>

      <Element name="truly-democratic-org" id="truly-democratic-org">
        <h2>
          DSA must be a truly democratic organization with political and
          accountable leadership and enough resources to carry out our most
          ambitious goals
        </h2>
        <Img fluid={data.plank3.childImageSharp.fluid} />
        <p>
          DSA requires the resources and structures it needs to win. To build
          the powerful big-tent DSA that we know is possible and necessary to
          take on the capitalist class and to organize hundreds of thousands of
          workers as socialists.
        </p>
        <p>
          Because we are still operating as a 5,000 member group, the DSA is
          underfunded and understaffed at all levels relative to its actual
          membership size. As a result, it is often hard to drive forward our
          political campaigns and leadership responsibility often is reduced to
          administrative triage. DSA needs greater organizational capacity and
          more accountable political leadership at all levels in order to make
          our organizing as effective as possible.
        </p>
        <p>
          This is distinct from the way top-down and staff-driven nonprofits
          operate. In those organizations, pressures to secure grant funding and
          “get a seat at the table” in professional political circles cause
          leaders to prioritize maintaining the status quo to the detriment of
          socialist debate and rank-and-file leadership. DSA can combat this by
          promoting a culture of political deliberation, increasing the
          accountability of our leaders, and creating material conditions for
          our elected leaders to really lead.
        </p>
        <p>
          We can’t win socialism with 100% volunteer labor––we need to use our
          collective resources to enable some members to organize for socialism
          full time. Without this, leadership in DSA will continue to be
          relatively inaccessible to working-class activists who don’t have the
          same amount of free time and money as others to lead our political
          work.
        </p>
        <p>DSA needs to:</p>
        <ul>
          <li>
            <p>
              <strong>Elect our National Director</strong>&mdash;DSA’s National
              Director is an important political leadership position, and it
              should be treated as such. The National Director is in charge of
              the day-to-day functioning of the organization and has direct
              control over DSA’s multi-million budget, dozens of staff, and
              media presence. That’s why Bread &amp; Roses is supporting a
              change to the DSA Constitution at this year’s Convention to Elect
              Our National Director at Convention every two years.
            </p>
            <p>
              Winning an election for the Director position from the delegated
              convention every two years will give the National Director the
              mandate they need to effectively help lead our organization.
              Encouraging campaigns for the position will motivate candidates to
              put forward a compelling vision for our organization.
            </p>
            <p>
              Ensuring that the National Director has a vote on the NPC will
              help allow them to lead politically along with other elected
              leaders, encourage them to participate actively in important
              debates over the organization’s policies and practices, and
              increase transparency of their leadership of national
              organization.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Provide Stipends to NPC Steering Committee Members
              </strong>
              &mdash;The National Political Committee is the highest
              decision-making body of the organization, and it’s Steering
              Committee, an elected body of 5 out of the 16 NPC members, takes
              on the lion’s share of work and day to day decision making.
            </p>
            <p>
              NPC members work hard to steer our organization, but they’re still
              largely isolated from chapters and leaders on the ground.
              Furthermore, since NPC members are unpaid, they effectively work
              two full time jobs. We must build an organization that ensures
              working class people are able to lead our movement, rather than
              relying on a layer of leaders who already have the time and
              resources to donate. That’s why Bread &amp; Roses is supporting a{" "}
              <ExternalLink href="https://docs.google.com/document/d/1i333Ci59kGzV-ivbSwOl8Pg_WoUH0yHugRV7eetzGGI/edit?usp=sharing">
                Resolution to Provide Stipends of at least $2000 per month to
                NPC SC Members
              </ExternalLink>
              .
            </p>
          </li>
        </ul>
      </Element>
    </div>
  </Layout>
)

export const Convention2021Photo = graphql`
  fragment convention2021Photo on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const convention2021Query = graphql`
  query {
    plank1: file(relativePath: { eq: "convention-2021/plank1.png" }) {
      ...convention2021Photo
    }
    plank2: file(relativePath: { eq: "convention-2021/plank2.png" }) {
      ...convention2021Photo
    }
    plank3: file(relativePath: { eq: "convention-2021/plank3.png" }) {
      ...convention2021Photo
    }
  }
`

export default Convention2021Vision
