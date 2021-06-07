import React from "react"
import { Element } from "react-scroll"
import { Button } from "antd"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InternalLink from "../components/internal-link"
import ExternalLink from "../components/external-link"

const ReadTheResolution = ({ href }) => (
  <Button
    type="primary"
    shape="round"
    size="large"
    onClick={() => window.open(href, "_blank")}
    icon="double-right"
    style={{ marginBottom: 40 }}
  >
    Read the Resolution
  </Button>
)

const Convention2021Resolutions = ({ data }) => (
  <Layout
    title="Convention 2021 Resolutions"
    color="blue"
    heroImageName="convention-2021"
    layoutClassName="home"
  >
    <SEO title="Convention 2021 Resolutions" ogImage="where-we-stand" />
    <div className="sidebar">
      <h2>Resolutions</h2>
      <ul>
        <li>
          <InternalLink to="towards-working-class-party">
            Toward a Mass Working Class Party
          </InternalLink>
        </li>
        <li>
          <InternalLink to="labor-strategy">
            Building Worker Power to Win Democratic Socialism
          </InternalLink>
        </li>
        <li>
          <InternalLink to="matching-funds-for-chapters">
            National Matching Funds for Chapters to Hire Staff and Open Offices
          </InternalLink>
        </li>
        <li>
          <InternalLink to="beyond-100k">
            Beyond 100K: Building a Mass Socialist Organization
          </InternalLink>
        </li>
        <li>
          <InternalLink to="reparations">
            National Committee for Reparations to Black People
          </InternalLink>
        </li>
        <li>
          <InternalLink to="strengthening-ydsa">
            Strengthening YDSA
          </InternalLink>
        </li>
        <li>
          <InternalLink to="electing-national-director">
            Electing DSA’s National Director
          </InternalLink>
        </li>
        <li>
          <InternalLink to="npc-stipends">
            Stipends for NPC Steering Committee Members
          </InternalLink>
        </li>
      </ul>
    </div>

    <div className="content" id="wws">
      <p>
        Enabling DSA to become a more powerful, fighting organization will take
        a lot of work — but it can be done.
      </p>
      <p>
        To help get us there, here are eight steps we could take in the next two
        years:
      </p>
      <Element
        name="towards-working-class-party"
        id="towards-working-class-party"
      >
        <h2>
          The DSA National Electoral Committee’s Toward a Mass Working Class
          Party.
        </h2>
        <p>
          It’s important to turn DSA into a party-like electoral apparatus. We
          need to identify and run DSA organizers across the country who can use
          their offices to root class struggle politics in their community.
        </p>
        <p>
          <strong>At the chapter level</strong> this means developing a robust
          program to help chapters build Electoral Committees/Working Groups
          that can begin to develop short, medium and long-term plans in their
          chapters for DSA electoral campaigns as well as the skills to recruit
          and develop candidates and staff for campaigns.
        </p>
        <p>
          <strong>At the national level</strong> this means further developing
          the NEC (National Electoral Committee) fundraising and organizing
          capacity to support local working groups and a coordinated volunteer
          program to harness the power of DSA members in chapters who aren’t
          running electoral campaigns to help make the difference in critical
          DSA candidate races all over the country.
        </p>
        <p>
          <strong>National staff</strong> is crucial to carrying out this work.
          Electoral work has been woefully understaffed in DSA. The NEC needs
          electoral-specific staff to both help build national infrastructure
          and support chapters develop electoral infrastructure to be able to
          run socialists at all levels of government across the country.
        </p>
        <p>
          <ReadTheResolution href="https://dsanec.github.io/resolution/" />
        </p>
      </Element>

      <Element name="labor-strategy" id="labor-strategy">
        <h2>
          The Democratic Socialist Labor Commission’s Building Worker Power to
          Win Democratic Socialism: A Labor Strategy for DSA in 2021-2023
        </h2>
        <p>
          DSA needs to make labor a top priority and that the organization
          should work to:
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
          <p>
            As with our electoral work, the DSLC must be supported by additional
            organizing staff dedicated to making these programs happen.
          </p>
        </p>
        <p>
          <ReadTheResolution href="https://docs.google.com/document/d/1zf1PKeKlYXEsP8nSMsb0uHmqyCMinuRw1ofhDVnT6QA/edit?usp=sharing" />
        </p>
      </Element>

      <Element
        name="matching-funds-for-chapters"
        id="matching-funds-for-chapters"
      >
        <h2>
          Bread &amp; Roses’s Strengthen DSA From the Bottom Up Through National
          Matching Funds for Chapters to Hire Staff and Open Offices
        </h2>
        <p>
          DSA Chapters should be built into permanent and visible hubs of
          community organizing. Hiring chapter staff can dramatically expand
          chapters’ capacity for serious day to day organizing work, lessen the
          administrative burden on volunteer leaders, and help us build a
          durable presence in our communities.
        </p>
        <p>
          <ReadTheResolution href="https://convention2021.dsausa.org/2021-dsa-convention-resolutions/#P2D" />
        </p>
      </Element>

      <Element name="beyond-100k" id="beyond-100k">
        <h2>
          The DSA Growth and Development Committee’s Beyond 100K: Building a
          Mass Socialist Organization
        </h2>
        <p>
          Bread &amp; Roses members have worked with many DSA members of
          different tendencies on DSA’s Growth and Development Committee and we
          are proud to support the Beyond 100K Resolution they drafted. It calls
          on the organization to continue growing by training people to recruit
          their co-workers, building YDSA chapters in historically black
          colleges and universities and community colleges, and recruiting from
          the broader working class.
        </p>
        <p>
          <ReadTheResolution href="https://docs.google.com/document/d/1mfQkXDU2732CCiBp6ztp6GpyuGT9AXdzYQ0YeHWuCtI/edit?usp=sharing" />
        </p>
      </Element>

      <Element name="reparations" id="reparations">
        <h2>
          Bread &amp; Roses’s Formation of a National Committee for Reparations
          to Black People
        </h2>
        <p>
          We must build a truly multi-racial socialist movement, capable of
          uniting working people against our common enemies. That will require
          fighting to win demands that affect all workers, but also for demands
          that address specific instances of wage theft, housing discrimination,
          and other sources of oppression.
        </p>
        <p>
          <ReadTheResolution href="https://convention2021.dsausa.org/2021-dsa-convention-resolutions/#P1B" />
        </p>
      </Element>

      <Element name="strengthening-ydsa" id="strengthening-ydsa">
        <h2>Bread &amp; Roses’s Strengthening YDSA</h2>
        <p>
          The future of the socialist movement depends on recruiting and
          training lifelong socialists. Young Democratic Socialists of America
          is a crucial part of this. On historically black colleges and
          universities and community college campuses, YDSA has recruited
          working-class and POC organizers. Further, YDSA has established a
          pipeline for students to get rank-and-file jobs and work to strengthen
          and democratize the labor movement. The Resolution to Strengthen YDSA
          would give YDSA leadership a bigger role in decision-making over its
          budget, more resources for building up the YDSA Mentor program, and
          more say over YDSA staffing decisions.
        </p>
        <p>
          <ReadTheResolution href="https://docs.google.com/document/d/1ZypTHrIUw2GSbb8xGMy-Dq-UItytl3O_ZXoa00zV12o/edit?usp=sharing" />
        </p>
      </Element>

      <Element
        name="electing-national-director"
        id="electing-national-director"
      >
        <h2>
          Bread &amp; Roses’s constitutional change: Electing DSA’s National
          Director
        </h2>
        <p>
          DSA’s National Director is an important political leadership position,
          and it should be treated as such. The National Director is in charge
          of the day-to-day functioning of the organization and has direct
          control over DSA’s multi-million budget, dozens of staff, and media
          presence. That’s why Bread &amp; Roses is supporting a change to the
          DSA Constitution to elect our National Director at convention every
          two years.
        </p>
        <p>
          Winning an election for the Director position from the delegated
          convention every two years will give the National Director the mandate
          they need to effectively help lead our organization. Encouraging
          campaigns for the position will motivate candidates to put forward a
          compelling vision for our organization.
        </p>
        <p>
          Ensuring that the National Director has a vote on the NPC will help
          allow them to lead politically along with other elected leaders,
          encourage them to participate actively in important debates over the
          organization’s policies and practices, and increase transparency of
          their leadership of national organization.
        </p>
        <p>
          <ReadTheResolution href="https://docs.google.com/document/d/12J3OXOIXq6btqKT1BoTt2UCrMt6If8pTjZQAgl_miAg/edit?usp=sharing" />
        </p>
      </Element>

      <Element name="npc-stipends" id="npc-stipends">
        <h2>Bread &amp; Roses’s Stipends for NPC Steering Committee Members</h2>
        <p>
          The National Political Committee is the highest decision-making body
          of the organization, and it’s Steering Committee, an elected body of 5
          out of the 16 NPC members, takes on the lion’s share of work and day
          to day decision making.
        </p>
        <p>
          NPC members work hard to steer our organization, but they’re still
          largely isolated from chapters and leaders on the ground. Furthermore,
          since NPC members are unpaid, they effectively work two full time
          jobs. We must build an organization that ensures working class people
          are able to lead our movement, rather than relying on a layer of
          leaders who already have the time and resources to donate. That’s why
          Bread &amp; Roses supports a resolution to provide stipends of at
          least $2000 per month to NPC SC Members.
        </p>
        <p>
          <ReadTheResolution href="https://docs.google.com/document/d/1i333Ci59kGzV-ivbSwOl8Pg_WoUH0yHugRV7eetzGGI/edit?usp=sharing" />
        </p>
      </Element>
    </div>
  </Layout>
)

export const WwsPhoto = graphql`
  fragment wwsPhoto on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const wwsQuery = graphql`
  query {
    class: file(relativePath: { eq: "where-we-stand/WWS-class-struggle.png" }) {
      ...wwsPhoto
    }
    demroad: file(relativePath: { eq: "where-we-stand/WWS-dem-road.png" }) {
      ...wwsPhoto
    }
    internationalism: file(
      relativePath: { eq: "where-we-stand/WWS-internationalism.png" }
    ) {
      ...wwsPhoto
    }
  }
`

export default Convention2021Resolutions
