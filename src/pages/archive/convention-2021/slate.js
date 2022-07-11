/* eslint-disable */

import React from "react"
import { Element } from "react-scroll"
import { Modal, Button } from "antd"
import Img from "gatsby-image"
import { graphql, navigate } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import ExternalLink from "../../../components/external-link"

const candidates = [
  {
    name: "Sofia Guimarães Cutler",
    statement: (
      <>
        <p>
          In 2010, my family’s livelihood was on the line and my father was at
          risk of being fired. The administration of Newark Public Schools was
          going after teacher unionists like my father during a period of
          bipartisan anti-unionism and privatization efforts (spearheaded by
          then-mayor Cory Booker and President Barack Obama). It was a very
          uncertain and difficult time for my family who depended on his job. It
          also made me profoundly disillusioned with politics. Wasn’t the
          Democratic Party supposed to be the ones advocating for working
          families like mine? Instead it was a party working in the service of
          capitalists and undermining unionists in my family both here in Newark
          but also in Brazil, where my family faced the effects of multiple
          US-backed coups throughout history.
        </p>
        <p>
          It was only when I saw Bernie Sanders' insurgent campaign in 2016 that
          I knew there was an alternative: democratic socialism. Hearing him
          speak the language of class struggle lit a fire in me, and I quickly
          joined my local North New Jersey chapter and threw myself into work.
          While I have been involved in a variety of work in my chapter — from
          anti-ICE organizing as the co-point person of our immigrant justice
          working group to launching our defund the police campaign in response
          to the summer uprisings — my priority has been electoral organizing.
          Bernie Sanders taught me the importance of using elections to raise
          class consciousness and organize the working class. His race along
          with the recent electoral victories in places such as NYC and Chicago
          demonstrate that the electoral terrain is central for our struggle to
          ensure rights such as public housing, immigrant justice, and Medicare
          for all.
        </p>
        <p>
          For the last year, I have served as chair of the electoral working
          group and am leading our campaign to elect our longtime chapter-member
          Joel Brooks to city council in Jersey City. I worked closely with
          leaders on the National Electoral Committee as well as the Brooklyn
          Electoral Working Group to learn from the formidable electoral
          machines chapters have built around the country. Under my leadership,
          I helped pivot the chapter away from our previous paper endorsement
          model to an activist endorsement model, in which our chapter
          bottom-lines the entire campaign — from communications to field and
          finance — for a home-grown candidate. It’s been incredible to see the
          amount of internal infrastructure, skills and leadership this in-house
          campaign has built, all of which will outlast one election.
        </p>
        <p>
          Building up independent electoral apparatuses is critical to the kind
          of party-building we need to not just empower the working class but
          build independence from the Democratic Party. If elected to the NPC, I
          would love to help other chapters build independent electoral machines
          like ours. I’d work with DSA chapters across the country to help them
          build in-house electoral machines of home-grown, openly socialist
          members who are committed to not just legislating but building and
          being tied to our organization.
        </p>
      </>
    ),
  },
  {
    name: "Gilman Bagga",
    statement: (
      <>
        <p>
          The socialist movement is our last chance to prevent climate
          extinction. I became a socialist in 2014 because, among other reasons,
          it became obvious that my generation can’t survive the climate crisis
          under capitalism. I began organizing as a teenager, first alongside my
          classmates, then as a worker and a socialist. I joined DSA and got a
          job at UPS, where I started talking with coworkers about the “Vote No”
          campaign against a sellout contract forced on UPS Teamsters. I got a
          first-hand crash course in class struggle.
        </p>
        <p>
          Since 2018, I have devoted most of my organizing activity to helping
          build Louisville DSA. We’ve organized strike solidarity efforts,
          facilitated political education events, protested against ICE
          brutality, pressured our Congressman to cosponsor Medicare for All,
          and canvassed for candidates endorsed by our chapter. We organized an
          issue campaign to fight against cuts to the local library budget. We
          faced down intimidation and physical attacks from white supremacists
          and emerged stronger than ever.
        </p>
        <p>
          We’re a smaller chapter, but we’ve been able to punch above our weight
          because we’re part of a strong, national organization. If elected to
          the National Political Committee, I will work to ensure that every
          chapter gets the resources and support they need to do successful
          political work in their communities. I support measures that further
          develop our electoral and labor strategies, and I’m particularly
          excited about the proposed resolution to provide matching funds for
          chapter offices and staff.
        </p>
        <p>
          As a DSA member I have worn many hats: I canvassed for Bernie Sanders
          in New Hampshire, I have served as both a co-chair and a treasurer of
          Louisville DSA, and I was our chapter’s 100K captain as Louisville DSA
          managed to be one of the ten highest-performing chapters in the 2020
          recruitment drive. I want to build on these experiences and strengthen
          all of DSA.
        </p>
        <p>
          DSA has grown a lot over the past five years, but we need to honestly
          and intentionally address areas where we can improve. We need to grow
          DSA into a force that represents the whole working class. As a queer
          Asian American, I understand we need a movement that builds solidarity
          and class consciousness among the multiracial working class in every
          demographic, every community, and every country in the world. We can
          build an international socialism that challenges imperialism and
          threatens capital in the heart of its empire in the United States.
        </p>
        <p>
          I believe DSA can build a mass party of the workers, independent of
          the ruling class, and a vehicle for our movement to build real
          democracy in both the state and the workplace. The task before us is
          daunting, but necessary for our survival. I ask for your support in
          building DSA into that powerhouse and look forward to your comradeship
          in the class struggle for years to come.
        </p>
      </>
    ),
  },
  {
    name: "Laura Gabby",
    statement: (
      <>
        <p>
          In 2007, I got involved in my first political fight. Columbia
          University had a grand plan to expand into West Harlem, and community
          organizations and students were fighting back. It turned me into an
          anti-capitalist. The issue of displacement struck a nerve with me, as
          my family went through an unwanted move when I was 13 and my dad lost
          his job.
        </p>
        <p>
          While we lost this fight, something a mentor said stuck with me:
          construction workers have the power to stop this development. At the
          time, I never thought I’d become one.
        </p>
        <p>
          I spent the next few years working in office jobs, making a low wage
          while having tons of student debt. I didn’t like the work and couldn’t
          see spending the rest of my life that way. At the time, I was playing
          soccer daily with a lot of guys who worked in construction and
          landscaping — I began to think, maybe I should be doing a physical job
          like they do! And of course my mentor’s words years earlier replayed
          in my mind.
        </p>
        <p>
          I got into an apprenticeship with the Carpenters’ Union and
          immediately got involved in union life. There was a big fight going on
          over our next contract, and I was moved by rank-and-file union members
          organizing and speaking out passionately at our meetings. I grew close
          to members who wanted a fighting union, and sometimes ran
          rank-and-file slates for delegate elections and the local Executive
          Board.
        </p>
        <p>
          When Trump got elected, one thing it revealed to me was how narrow my
          activism had become, limited solely to my union. I joined DSA because
          it seemed past time to connect my work to the fight of the broader
          working class, and because after Bernie Sanders’ devastating defeat,
          it was clear that it wasn’t enough to be an anti-capitalist: we needed
          a movement of people fighting for democratic socialism.
        </p>
        <p>
          Meeting other labor activists through DSA gave me a theory to
          understand my activism in my union. I learned about the rank-and-file
          strategy and it was like a critical puzzle piece falling into place.
        </p>
        <p>
          I served as NYC-DSA’s secretary for a year after the first
          Bernie-boom, 2017-18. For the next two years, I was on the Labor
          Branch Organizing Committee and helped plan meetings, events and
          panels, organized Labor Notes-style trainings, chaired debates,
          organized and brought coworkers to solidarity actions and strike
          support, helped plan Labor for DSA candidate canvasses, and began work
          implementing a rank-and-file strategy resolution. For the past year,
          I’ve served on the DSLC and organized educational events, including
          the Socialists on the Job series, supported our educators’ network,
          and helped on campaigns including the PRO Act.
        </p>
        <p>
          I’m running for election to the NPC to strengthen our labor work.
          We’re building a mass movement, and in the coming years, I believe we
          will need a fighting labor movement to protect our wins and go beyond
          what we can win in the electoral arena and through issue-based
          pressure campaigns alone. I believe our labor work is key to becoming
          an organization that more fully reflects the working class — by race,
          by industry, by any measure.
        </p>
      </>
    ),
  },
]

class NPCSlate extends React.Component {
  state = { visible: false, candidate: null }

  showModal = (candidate) => {
    this.setState({
      visible: true,
      candidate: candidate,
    })
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    })
  }

  images = () => this.props.data.allFile.edges.map((edge) => edge.node)

  image = (candidate) => {
    const name = candidate.name.split(" ")[0].toLowerCase()
    return this.images().find((image) => image.name === name).childImageSharp
      .fluid
  }

  render() {
    console.log(this.props)
    return (
      <Layout
        title="Convention 2021 NPC Slate"
        color="blue"
        heroImageName="convention-2021"
        layoutClassName="home convention-2021"
      >
        <SEO title="Convention 2021 NPC Slate" ogImage="convention" />

        <div className="content-column content-column-candidates">
          <Element name="candidates" id="candidates">
            <h2>Meet the Candidates</h2>
          </Element>

          <div className="candidate-cards">
            {candidates.map((candidate) => (
              <div
                className="candidate-card"
                onClick={() => this.showModal(candidate)}
                key={candidate.name}
              >
                <CandidatePhoto
                  img={this.image(candidate)}
                  alt={candidate.name}
                />

                <div className="candidate-card__content">
                  <h3>{candidate.name}</h3>
                  <br />
                  <Button>Read more&hellip;</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-column">
          <Element name="priorities" id="priorities">
            <p>
              The Bread and Roses caucus is excited to introduce our slate for
              the 2021 National DSA convention: Sofia Guimarães Cutler, Gilman
              Bagga and Laura Gabby! Laura comes from one of the largest
              chapters in New York City, while Sofia and Gilman hail from
              smaller chapters in North New Jersey and Louisville.
            </p>
            <p>
              While we come from different locations and are involved in
              distinct organizing projects, we each believe, to quote Marx, that
              “the emancipation of the working class must be the act of the
              working class itself.” We center the working class as the agent of
              change in all the work we do, and our work focuses on winning
              material gains and building working class power to fight for
              themselves. From Laura’s rank-and-file organizing in her
              carpenter’s unions, to Sofia’s work building up an independent
              chapter electoral campaign to elect longtime chapter member Joel
              Brooks to city council in Jersey City, to Gilman’s work recruiting
              and building chapter infrastructure in Louisville — all of our
              work focuses on building the organization and self-activity of the
              multiracial working class.
            </p>
            <p>
              Building this power means prioritizing the workplace and the state
              as key terrains of struggle while developing DSA into a tribune
              for socialism. History has shown us that labor and electoral
              organizing are two strategic ways to conduct winnable campaigns,
              advocate socialist politics, and build working-class power to take
              on bigger campaigns in the future. In order to achieve this, we
              will also need to strengthen National DSA’s ability to support,
              lead and have more democratic input from the locals so that
              chapters can better organize on a national level.{" "}
            </p>
            <p>
              It’s by building rank-and-file power in our unions, launching
              class-struggle election campaigns and bold legislative fights that
              work in coalition with the labor movement, and building a strong
              DSA that we can win a Green New Deal, the abolition of ICE,
              Medicare for All, defunding the police, and ultimately socialism.
            </p>
            <p>
              <Img fluid={this.props.data.slate.childImageSharp.fluid} />
            </p>
            <p>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  icon="pushpin"
                  onClick={() => navigate("/convention-2021-resolutions/")}
                  style={{
                    whiteSpace: "normal",
                    height: "auto",
                    minHeight: "60px",
                    fontSize: 24,
                  }}
                >
                  8 Convention Resolutions to Support
                </Button>
              </p>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  onClick={() => navigate("/convention-2021-vision/")}
                  icon="bulb"
                  style={{
                    whiteSpace: "normal",
                    height: "auto",
                    minHeight: "60px",
                    fontSize: 24,
                  }}
                >
                  Full Convention Vision
                </Button>
              </p>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  onClick={() =>
                    window.open(
                      "https://breadandrosesdsa.us8.list-manage.com/subscribe?u=9448901c8beae38362c8093d1&id=c2b8e01b0d",
                      "_blank"
                    )
                  }
                  icon="form"
                  style={{
                    whiteSpace: "normal",
                    height: "auto",
                    minHeight: "60px",
                    fontSize: 24,
                  }}
                >
                  Subscribe for Updates
                </Button>
              </p>
            </p>
          </Element>
        </div>

        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          {this.state.candidate && (
            <>
              <h2>{this.state.candidate.name}</h2>
              <CandidatePhoto
                img={this.image(this.state.candidate)}
                alt={this.state.candidate.name}
              />
              {this.state.candidate.statement}
            </>
          )}
        </Modal>
      </Layout>
    )
  }
}

const CandidatePhoto = ({ img, alt }) => (
  <Img className="candidate-photo" fluid={img} alt={alt} />
)

export const Convention2021SlatePhoto = graphql`
  fragment convention2021SlatePhoto on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query Candidates2021Query {
    allFile(
      filter: { absolutePath: { regex: "/convention-2021/headshots/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
    slate: file(relativePath: { eq: "convention-2021/slate.png" }) {
      ...convention2021SlatePhoto
    }
  }
`

export default NPCSlate
