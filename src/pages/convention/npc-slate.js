import React from "react"
import { Element } from "react-scroll"
import { Modal, Button } from "antd"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ExternalLink from "../../components/external-link"

const candidates = [
  {
    name: "Marianela D'Aprile",
    statement:
      "In 2002, at the height of the economic crisis in Argentina, my dad got an ultimatum from his boss: move to the U.S., or lose his contract. For a forty-year-old with no college degree, it wasn’t much of a choice. My family’s forced migration to a rural West Tennessee town radicalized me, as did the student movement in Chile, where I lived and worked in the early 2010s.\n\nI joined DSA in late 2016, after a year as a member of UAW 2865, where I led my unit’s first organizing committee and helped to bring the unit to majority for the first time in almost ten years. I was later hired as a staffer for UAW 2865, an experience that solidified my commitment to the rank-and-file strategy. At the same time, I was also organizing for East Bay DSA’s single-payer campaign, contributing to creating many of the materials used today in DSA’s national Medicare for All campaign.\n\nI moved to Chicago in late 2017, where I served as secretary of Chicago DSA through April of 2018, working alongside comrades to update and streamline our communications and records systems, as well as helping to kick off our involvement in the Lift the Ban campaign for rent control.\n\nIn July 2018, I was appointed to fill a vacancy on DSA’s National Political Committee. The reasons I ran then are largely the same as the reasons I’m running now: I believe we’re at a crucial moment for the socialist movement, with great potential to galvanize and organize a multi-racial, working-class movement that will fight oppression and exploitation and build the just world we want and deserve.\n\nAs an NPC member, my primary responsibility has been on the National Electoral Committee. Working on the committee, I’ve learned the kinds of needs that chapters have, especially newer and smaller ones. I want to continue to build our electoral strategy at the national level so that we leverage DSA endorsements to support candidates who will draw the lines between the working class and the capitalist class and continue to galvanize a movement of our class for itself.\n\nI’m proud to be running on the Bread & Roses slate because we share a vision of building a mass socialist movement committed to fighting against oppression, and because we share the belief that only action by an organized, powerful working class can bring about such a movement.",
  },
  {
    name: "Marsha Niemeijer",
    statement:
      "In 2000, while studying for a PhD at York University in Canada, I helped organize fellow grad assistants into Canadian Union of Public Employees Local 3903 and then helped lead a strike on a 30,000 student campus for more than ten weeks. I was one of four daily strike coordinators, tasked with helping run the strike. On any given day I was finding supplies of wood for the fire barrels on the picket lines, protecting rogue pickets from the administration’s wrath, negotiating with the cops when we caused traffic chaos, and more. We won the strike!\n\nAfter this experience, I dropped out of the PhD program because I wanted to permanently work with the troublemaking wing of the labor movement — so I went to Labor Notes. I was a staff writer in Detroit from 2001-2009. After my daughter Ruby was born in NYC, I became a staff organizer for the Longshore Workers Coalition, the rank-and-file reform caucus in the still mobbed-up International Longshoremen’s Association. I worked with militant longshore workers throughout the East Coast and the South, helping members win office, develop contract campaigns, and develop leadership. In 2014, I joined the staff of the New York State Nurses Association, where I’m now the lead staff representative in the Bronx.\n\nIn 2018, I was elected to the Democratic Socialist Labor Commission Steering Committee. The DSLC has accomplished a tremendous amount since its revival after the 2017 Convention. While we have grappled with capacity, we collectively and successfully created a brand new national labor commission from scratch. I believe that the work of this first DSLC has generated renewed energy for socialists in the labor movement.\n\nWithout democratic, militant working-class institutions, we will not win socialism. I’ve committed my life to growing the troublemaking wing of the labor movement so workers can move into struggle against the boss, and through that process develop a larger political analysis of their task as a class. I’m deeply committed to building a strong DSA to advance this process.",
  },
  {
    name: "Megan Svoboda",
    statement:
      "Throughout the last two and a half years, I have been a member of the East Bay DSA chapter and a Steering Committee Member on the DSA Medicare for All campaign. For the last six months I have also been a Steering Committee member on the DSA for Bernie Campaign.\n\nIn the East Bay, I have helped to grow a small group of committed activists into a chapter with more than 1,000 members. Much of this growth was facilitated by a year-long focus on the California Single Payer campaign. This campaign allowed members (including me!) to grow into leaders of the chapter. It taught me and many others how to talk to our neighbors about universal demands and articulate the importance of reforms that attack the power of the capitalist class directly. And we learned nuts-and-bolts campaign skills that have been invaluable to our growth as organizers.\n\nAs a member of the East Bay Steering Committee over the last year, I supported the Jovanka Beckles for State Assembly campaign, East Bay DSA’s efforts to support the Oakland Teachers Strike — including a brief stint working on the incredible Bread for Ed effort to feed students during the strike — and the growth of our Social Housing committee, which participated in a statewide campaign to repeal a law limiting rent control.\n\nAs a member of the DSA Medicare for All Steering Committee, I have worked closely with other members of the Organizing Subcommittee to facilitate the launch of the national campaign’s Regional Organizer Program, organize our M4A Chapter Activist Training calls, and create our organizing guide and other campaign materials. I’ve also worked on organizing our national weekends of action and planned two regional speaking tours with Michael Lighty. The program now supports eleven volunteer member Regional Organizers all over the US.\n\nMajor campaigns like Bernie Sanders, Medicare for All, and the Green New Deal have the potential to galvanize millions of working class people through struggles against the capitalist class. DSA can play a major part in that process, but only if we successfully build off the structures we’ve built and our amazing wins from the last two years. We need to bring more people — especially working class people and people of color — into our organization, we need to develop our organizing capacity both on a local and national level, and we need to build strong coalitions with progressive and working-class forces to fight for these mass demands. I believe we can do it, and I’m thrilled to be running to be on the NPC to help that happen at a national level.",
  },
  {
    name: "Natalie Midiri",
    statement:
      "After joining DSA in 2013, I served in leadership of the Philadelphia chapter from 2014-2017, first as Events Coordinator, and later as Chair through the height of the Bernie Sanders campaign. In my time as a chapter leader, I led a series of Political Revolution 101 events to encourage Bernie supporters to join DSA and organized a Socialist Convergence and Socialist Caucus event during the DNC. Following the primary and the Trump bump in 2016, I was part of a group of leaders in Philly who supported launching a Medicare for All campaign to channel the new energy in our chapter into action and later, supported Medicare for All at our 2017 Convention as a national priority for DSA.\n\nIn my time in DSA, I’ve been involved with my chapter’s Abolish Student Debt, 15 Now, Bernie, and M4A campaigns. I’ve also provided strike and picket support for numerous unions in Philadelphia, including PASNAP nurses, SEPTA workers in TWU Local 234, faculty in APSCUF and TAUP, and UPS workers at Teamsters Local 623.\n\nAs a national leader of DSA elected to the NPC in August 2017, I’ve served on the NPC’s Steering Committee, the Personnel Committee, and have chaired the Fundraising & Development Committee as well as the Convention Planning Committee. Some of the decisions I’m most proud of making as an NPC member include: endorsing Bernie’s 2020 presidential campaign, supporting our collective bargaining agreement with DSA’s staff union, and sending DSA teachers to provide strike solidarity and build relationships during the West Virginia and UTLA teacher strikes.\n\nI’m running for reelection to the NPC on the Bread & Roses slate because I believe that we have an incredible opportunity through the Bernie 2020 campaign to popularize socialist politics to a mass working class audience. I’m also running because my life was profoundly changed by experiences I had in my first few years in DSA and the labor movement. I think DSA can and should be encouraging the thousands of new members who come to the socialist movement every year to run campaigns in their local area with unions whenever possible, and to take jobs as rank-and-file union members wherever possible. If elected for a second term, I will continue to support the DSLC’s work and prioritize DSA solidarity with workers rebuilding the militant wing of the labor movement.",
  },
  {
    name: "Rachel Zibrat",
    statement:
      "I became a socialist because I was a feminist first. I began abortion clinic escorting in 2014 in Chicago. Bearing witness to the harassment and abuse ordinary people accessing healthcare are subjected to by the religious right has been the most radicalizing experience of my life, and it led me to socialism. The day after the 2016 election, I joined DSA.\n\nSince then I’ve been an active member of Chicago DSA. I helped rebuild the Socialist Feminist Working Group here and served as its co-chair. Our working group has prioritized the fight for reproductive justice, and among many other projects has raised over $10,000 for two National Network of Abortion Funds Bowl-A-Thon teams. Our working group has also always highlighted how specific anti-oppression demands go hand-in-hand with the fight for a broader working class movement. We cannot have one without the other.\n\nI also serve as a Chicago DSA North Side Steering Committee member and representative to our Executive Committee. As a member of the Executive Committee (and as a nonprofit worker in my day job), I am comfortable with making high-level decisions that affect operations, as well as the nuances of refining processes on tight budgets.\n\nI decided to run for NPC because I believe we have a critical opportunity as DSA to build a mass socialist movement that will ultimately turn millions of people into socialists. And I believe that it is critical that we do that by building mass campaigns for demands like Medicare for All and by fighting against the very real forms of racial, national, and gender oppression that working-class people experience every day.",
  },
]

class NPCSlate extends React.Component {
  state = { visible: false, candidate: null }

  showModal = candidate => {
    this.setState({
      visible: true,
      candidate: candidate,
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    })
  }

  images = () => this.props.data.allFile.edges.map(edge => edge.node)

  image = candidate => {
    const name = candidate.name.split(" ")[0].toLowerCase()
    return this.images().find(image => image.name === name).childImageSharp
      .fluid
  }

  render() {
    return (
      <Layout title="NPC Slate" color="yellow" heroImageName="convention">
        <SEO title="NPC Slate" ogImage="convention" />

        <div className="content-column content-column-candidates">
          <Element name="candidates" id="candidates">
            <h2>Meet the Candidates</h2>
          </Element>

          <div className="candidate-cards">
            {candidates.map(candidate => (
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
                  <Button>Read more&hellip;</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-column">
          <Element name="priorities" id="priorities">
            <h2>Priorities</h2>
            <p>
              DSA&rsquo;s{" "}
              <ExternalLink href="https://www.dsausa.org/about-us/structure/">
                National Political Committee
              </ExternalLink>{" "}
              is the highest leadership body in the organization. Made up of 16
              members plus representatives from the Young Democratic Socialists
              of America, it makes important policy and organizational decisions
              for DSA in between biennial national conventions.
            </p>
            <p>
              For the 2019 DSA National Convention, Bread &amp; Roses is proud
              to be running a five person slate for NPC including Marianela
              D&rsquo;Aprile, Marsha Niemeijer, Megan Svoboda, Natalie Midiri,
              and Rachel Zibrat.
            </p>
            <p>
              If elected to the NPC, Marianela, Marsha, Megan, Natalie, and
              Rachel will work to prioritize five areas of work.
            </p>
            <h3>1. Organize with the Rank-and-File</h3>
            <p>
              The greatest power we have as working people to end exploitation
              and oppression is the power we have in our workplaces to stop the
              flow of profits to the capitalist class. That power can only be
              unlocked, though, when we successfully organize with our
              coworkers.
            </p>
            <p>
              DSA has a responsibility to help build a new militant, democratic,
              and left-wing labor movement that can truly unlock that power. The{" "}
              <ExternalLink href="https://www.jacobinmag.com/2019/03/rank-and-file-strategy-union-organizing">
                rank-and-file strategy
              </ExternalLink>{" "}
              is at the core of our vision for doing that. We need democratic
              socialists across the country to{" "}
              <ExternalLink href="https://socialistcall.com/2019/05/24/rank-and-file-strategy-union-socialism/">
                get union jobs
              </ExternalLink>{" "}
              and organize with their coworkers to transform their unions. And
              we need to improve our capacity as an organization to do{" "}
              <ExternalLink href="https://socialistcall.com/2019/05/14/lessons-from-the-east-bay/">
                strike solidarity work
              </ExternalLink>{" "}
              in our communities, assisting workers in struggle whenever they
              need it.
            </p>
            <h3>2. Build Bernie 2020 and Beyond</h3>
            <p>
              In 2020, we have a chance through the Bernie Sanders campaign to{" "}
              <ExternalLink href="https://socialistcall.com/2018/08/16/bernie-2020/">
                popularize a platform
              </ExternalLink>{" "}
              of demands that could materially change the lives of Americans and
              build working-class power. DSA must seize this opportunity by
              doing our best to help win the Democratic presidential primary for
              Bernie Sanders. Sanders is far and away our best hope to beat
              Donald Trump in November 2020. We must also use the campaign to
              organize alongside millions of new activists,{" "}
              <ExternalLink href="https://socialistcall.com/2018/12/06/bernie-and-class-politics/">
                build class consciousness
              </ExternalLink>{" "}
              on an unprecedented scale, and expand DSA.
            </p>
            <p>
              By the end of the campaign, we must be prepared as an organization
              to channel this momentum into down-ballot electoral campaigns,
              workplace actions, and mass protests that push class struggle
              politics even further.
            </p>
            <h3>3. Fight Oppression</h3>
            <p>
              A socialist world{" "}
              <ExternalLink href="https://socialistcall.com/2018/09/07/class-politics-and-the-fight-against-oppression/">
                cannot coexist
              </ExternalLink>{" "}
              with racial, national, gender, and other forms of oppression.
            </p>
            <p>
              We believe that DSA must foreground demands that can help destroy
              these forms of oppression in{" "}
              <ExternalLink href="https://socialistcall.com/2019/06/04/tiffany-caban-dsa-queens/">
                all our campaign work
              </ExternalLink>
              . And as an organization we must be prepared in the next two years
              to mobilize on a national scale in coalitions to defend the right
              to abortion, to defeat police and gender violence, to end mass
              incarceration and the brutal immigration regime, and to stop US
              military interventions in Venezuela, Iran, and around the world.
            </p>
            <h3>4. Expand Mass Action Campaigns</h3>
            <p>
              We support propaganda and legislative{" "}
              <ExternalLink href="https://socialistcall.com/2018/08/16/liberalism-ultraleftism-or-mass-action/">
                campaigns for big demands
              </ExternalLink>{" "}
              that are popular with millions of working people and draw sharp
              lines between the interests of millionaires and billionaires and
              everyone else.
            </p>
            <p>
              In 2019, we support renewing DSA&rsquo;s{" "}
              <ExternalLink href="https://socialistcall.com/2018/10/26/why-we-fight-for-medicare-for-all/">
                Medicare for All
              </ExternalLink>{" "}
              campaign and launching a new fight for an anti-capitalist{" "}
              <ExternalLink href="https://socialistcall.com/2019/04/26/fight-for-the-green-new-deal/">
                Green New Deal
              </ExternalLink>
              .
            </p>
            <h3>5. Strengthen DSA&rsquo;s Political Education Projects</h3>
            <p>
              Every socialist knows at least ten people who are curious about
              class-struggle politics and how capitalism works.{" "}
              <ExternalLink href="https://drive.google.com/file/d/1y4qZUIxx-4XBqXAWRDRQI5glJY8WPmyW/view">
                Political education
              </ExternalLink>{" "}
              is our best means to train ourselves to convince those people of
              the importance of building a movement that fights capitalism,
              white supremacy, imperialism, patriarchy, and climate catastrophe.
            </p>
            <p>
              DSA must therefore beef up its political education program in the
              next two years, including applying more resources to political
              education courses and kicking our communications and media game to
              a new level.
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
              <ReactMarkdown
                renderers={{
                  link: props => (
                    <a
                      href={props.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {props.children}
                    </a>
                  ),
                }}
                source={this.state.candidate.statement}
              />
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

export const query = graphql`
  query CandidatesQuery {
    allFile(filter: { absolutePath: { regex: "/headshots/" } }) {
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
  }
`

export default NPCSlate
