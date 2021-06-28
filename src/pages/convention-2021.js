import React from "react"
import { Element } from "react-scroll"
import { Modal, Button, Collapse } from "antd"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import { navigate } from "gatsby"

const { Panel } = Collapse

const candidates = [
  {
    name: "Anthony Downing",
    chapter: "Lehigh Valley",
    statement:
      "Greetings Comrades! My name is Anthony and I am from the Lehigh Valley Chapter of DSA and I am running on the Bread & Roses slate for DSLC.\n\nMy labor experience is born in the rank and file of BCTGM. I started as an electro-mechanical technician in a bakery and a candy factory. My first experience leading workers was as a strike captain, and leading a social media campaign in which our boycott reached hundreds of thousands of people. This experience vaulted me into a steward position in which I lead my co-workers in a victory against a raiding labor organization in two different plants, all while building a contact campaign which ended in revolutionary changes in high performance bakery contracts and created a blueprint for other locals to follow.\n\nI was pulled from the shop by the International to run communication support at a pension rally with over 15,000 union members and retirees in Ohio. Shortly after I lead retirees, community orgs, and members in action against the board of directors of Mondelez-Nabisco in our “Hands off our pension” campaign. I also participated in many new organizing campaigns, recently serving as the lead organizer. All of this experience was as a rank and file mechanic and I learned that organizing to build real worker power was the center of the labor movement.\n\nCurrently I am an organizer with the largest healthcare union in Pennsylvania and have the honor of guiding workers in how to lead themselves into struggle and win. We just recently ratified a contract with the toughest employer in our union and it was done by the tough organizing that goes into teaching the workers how much power they have and how to use it.\n\nI hope to focus my efforts as a member of the DSLC on developing a program that supports smaller chapters in their efforts to form robust labor groups able to respond to their community’s needs. I plan on forming a support plan which we can train organizers in every aspect from the initial conversation to the election.  I also plan on helping to coordinate national and local labor solidarity campaigns,  supporting the Rank and File Strategy, and organizing the unorganized.",
  },
  {
    name: "Ashley Payne",
    chapter: "East Bay",
    statement:
      "Comrades, my name is Ashley Payne (she/her) and I am honored to be running for the Democratic Socialists Labor Commission from the East Bay chapter with the Bread and Roses slate.\n\nAfter working in a couple of educational nonprofits where my good intentions to make change in the world and my need for reliable health care were being exploited, I sought out a union job. I have been in this job a little over five years now. I signed up to be a member of SEIU 1021 immediately. I got active in my union during our 2016 contract campaign, organizing my worksite of 100 members through informational pickets, unity breaks, 1:1s, flyering, meetings, and eventually, our 1100 members engaged in a 10 day strike late October 2016. That strike had very mixed results as do so many strikes. There were two big takeaways that have informed my organizing: 1) It has been the best opportunity to rebuild the union by having many overdue conversations and forcing out old leadership. 2) It demonstrated to the other unions in the county we are militant and serious about making change. The second outcome of our 2016 strike resulted in  rebuilding the labor coalition that existed prior to the 2013 contract cycle. We are now organizing across nine unions (4000 members) in our coalition with an eye on our next contract fight in 2022.\n\nIn Summer 2017, I was elected shop steward at my site and I was appointed Chief Shop Steward immediately afterward. This past May, I was elected as First Vice President of our chapter. Additionally, I organize on our county’s SEIU 1021 COPE (Committee on Political Education) Committee. Lastly, I am a AFL-CIO Central Labor Council Delegate in Contra Costa County, California.\n\nI joined DSA in January 2017 and have been involved mostly in the Labor Committee (former co-chair ‘18-’19) and Racial Solidarity Committees and national caucuses: AFROSOCialist and Bread and Roses. I am now co-chairing East Bay’s Racial Solidarity Committee and serving as a Steering Committee member for the DSA Growth and Development Committee amidst many other DSA organizing campaigns and projects.\n\nThe socialist and labor movements are often operating separately from one another without much overlap in membership and therefore, lacking unity of action. Historically, in the US, many of the most militant periods of the labor movement had socialists and communists at the center of these fights guiding movement strategy. We have an opportunity in the midst of a strike wave to bring these two movements together again. One of our goals as socialists in the labor movement is to hold that history for the present and future generations of labor militants and organizers.\n\nAt the same time, union density in the US is at a historic low. Many people do not yet see the value in a union or can even define what it is. The labor movement is the only place we have seen continuous working class struggle. DSA is uniquely positioned through the DSLC to provide political development and a counter narrative to racial capitalism’s anti-union messaging and union busting.\n\nThe DSLC should encourage socialists to embed themselves in the working class through the rank and file strategy. This is the only way socialists can take up the fights of workers as our own, to stand alongside them—in the same circumstances as them— when a boss is trying to harass a coworker or cut their hours unjustly. By embedding ourselves in unions we can help to rebuild the militancy of the labor movement. The workplace is the best place to do this because this is where we spend the best hours of our days. And until we abolish the domination, exploitation, and oppression of wage slavery, the workplace must be our primary site of struggle to build class consciousness and organize the class to be of and for itself. Class struggle unionism means  robust, militant unions that can win on the job, in their industry through sectoral bargaining, and in the wider community leading struggles such as [Medicare for All](https://jacobinmag.com/2019/12/medicare-for-all-social-workers-health-care) and a [Green New Deal](https://jacobinmag.com/2019/12/a-green-new-deal-can-win-even-among-building-trades-unions).\n\nThe most strategic vehicle for expanding the organized labor movement means working within existing unions to launch new organizing and unionization drives. Socialists positioned in union leadership can persuade their memberships and staff to use their deep experience to bring more workers into the organized labor movement. There are limits to what DSA can do in new organizing because we are not a union. However, even with these limits, DSA is uniquely positioned to coordinate labor solidarity efforts as we have seen in so many DSA chapters during the teacher strike wave or the successful Anchor Steam unionization drive. The DSLC should be a resource for member leaders to share their experiences with other chapters engaging in labor solidarity work.\n\nI hope you vote for me and my comrades on the Bread and Roses slate because we have a clear analysis of the present conditions of the US labor movement and the organizing skill to carry out the 2019 DSA Convention resolutions to bring together the socialist and labor movements.",
  },
  {
    name: "J.P. Kaderbek",
    chapter: "Chicago",
    statement:
      'I work two jobs. At the first job I work part-time front-of-house at a bar/restaurant. At my other I work full-time as a rank-and-file Teamster serving as a shop steward at one of the largest and wealthiest employers on the South Side of Chicago. Unlike many Teamster locals mine is majority women and people of color and many of us make close to the Chicago minimum wage of $15/hour. Together we fight for basic dignity at work like the right to take care of our mental and physical well-being, and against unjust discipline. I also helped organize a new unit of workers who recently had their right to unionize upheld by the Seventh Circuit Court of Appeals.\n\nI’ve been in the DSA for a relatively long time, first joining the Young Democratic Socialists back in 2008. Since 2016 I have been deeply involved in Chicago DSA, serving in branch leadership and on our Executive Committee. Alongside dozens of my comrades we’ve grown Chicago DSA into a large and extremely effective chapter that has not only made headlines, but also re-shaped the political landscape in Chicago. This wasn’t achieved simply by organizing through issues as they arose; it involved bringing serious decisions about our political orientation and collective strategy to the chapter, and winning strong majority support for our perspectives.\n\nI have also served in the leadership the Chicago DSA Labor Branch. Initially we were a small group of less than a dozen labor activists able to do little more than picket adoptions like the one I helped organize in 2017 in support of CWA members on strike at AT&T. From that we have developed into a vibrant Branch, run chiefly by rank-and-file union members, that has taken a leading role in large strike solidarity operations and labor education in our city. Our largest meetings have had close to a hundred attendees.\n\nI’m the only current member of the DSLC steering committee who is running again, and I hope to provide some continuity to the Commission. It has been a challenging two years, and in that time we’ve learned a lot from both successes and missteps. I hope to help us move forward and improve upon what we’ve already accomplished, like our Labor 101 Curriculum and the panels we organized for the Socialism 2019 Conference in Chicago. \n\nFor the 2019 DSA Convention I helped co-author Resolution 32, Labor Strategy and the DSLC, better known as "The Rank and File Strategy Resolution." The supporters for our resolution were extremely politically diverse. What united us was not a list of organizing tasks but a shared political perspective on what the labor movement needs to be revitalized, something learned first hand in our workplaces. It is that political perspective that I want to bring to our socialist labor commission, the idea that the labor movement needs to democratically empower the ranks of the membership, not just manage labor relations and orchestrate PR stunts chiefly through staff from the hall.',
  },
  {
    name: "K.T. Liberato",
    chapter: "Philly",
    statement:
      "My name is K.T. Liberato (he/him). Since 2014, I have been a full-time railroad maintenance and construction worker. In 2017 I was elected president and grievance committeeman of Local 3012 of the BMWED-IBT.\n\nI am a member of Philadelphia DSA and I am running for the Democratic Socialist Labor Commission steering committee as a member of the Bread & Roses caucus.\n\nI joined DSA in August of 2018 and have been active through Labor for Bernie, Philly DSA Bernie organizing, and the Philly Labor Branch. I first entered the socialist movement in 2010 as a member of the Socialist Party USA and Solidarity. Prior to joining DSA I was a member of LeftRoots, where I was a founder and a member of the Philadelphia branch, as well as a member of the national leadership of the organization. I am a Black worker of predominantly Dominican, Puerto Rican, and Afro-American upbringing with some Cuban roots. I hail from̈The Barrio¨ in North Philadelphia.\n\nOver the course of my life I have worked different kinds of jobs including working in a call center, under the table work in housekeeping at Motel 6, as well as construction, basic maintenance, post-game stadium cleanup, and adjuncting as a university history instructor. Additionally, I come from a family of janitors, construction workers, sugar cane workers, laundry workers, truck-drivers, resort hotel housekeepers, welders, hair-dressers, and retail workers, which has made me sensitive to centrality of the labor movement in the cause of freedom.\n\nI became active in the labor movement around 2006. I participated in rallies for single payer health-care and in a massive immigrant workers rights protest in Philadelphia. At Penn State, I was a member of the United Students Against Sweatshops and I organized a campus wide teach-in during the Wisconsin labor fight-back and the struggle against austerity in 2011.\n\nIn 2009 I worked as a union organizer with UFCW 1776. I participated in a union organizing drive at a meatpacking company, and an internal mobilization in preparation for a strike at local Philly supermarkets.\n\nAs president of my local (first elected in 2017),  I’ve held workshops on the Workplace Democracy Act, Medicare for All, and the Green New Deal. The local now supports all of these policies and has passed a resolution to only support local and state candidates that support these pieces of legislation and pro-union and anti-privatization legislation. Our local, along with the Penn Federation BMWED, has endorsed Bernie Sanders. Our local also endorsed and supported Kendra Brooks for city council. Local 3012 mobilized to support the paid parental leave resolution advanced by members of the federation's  women’s caucus. Lastly, I introduced and mobilized support for a resolution to provide material and financial support for striking UAW workers.\n\nIf I am elected to the DSLC, my main interests will include developing a socialist labor education program and educational tools that support efforts to organize the unorganized within unions and R&F workers not in unions; outlining and developing class-struggle campaigns that unite R&F workers, DSA activists, and residents from working-class neighborhoods in struggle;  developing a strategy document with analysis of key industries and unions to inform R&F work;  recruiting more rank-and-file labor activists, especially Black and Brown workers, to DSA; and developing labor solidarity campaigns (e.g. strike support, union organizing support, labor against the war etc).",
  },
  {
    name: "Laura Gabby",
    chapter: "NYC",
    statement:
      "I’m a carpenter and rank and file organizer. I’ve been involved in the labor movement for 9 years, first year as an organizer at CIR and 8 years as a member of the Carpenters’ Union. Four years in, I ran on a rank and file delegate slate that united around maintaining our contract, and got 100% of our 38-member slate elected We were able to maintain our contract for our terms.\n\nFor the past few years I've been involved in cross-trade solidarity work in the building trades, protesting the high death rate and unsafe conditions on nonunion job sites, organizing solidarity actions with non-union construction workers, and helping pass safety legislation. I was also involved in a fight against a billionaire developer trying to break the construction unions at Hudson Yards development in Manhattan.\n\nA year and a half ago, I became the first woman elected to the executive board of Local 157, the largest carpenters' local in the country. I worked with other R&F carpenters on a contract campaign. We’re now forming a rank and file carpenters’ caucus to have a more continuous and highly-organized presence in the union outside elections.\n\nI’ve been an active member of NYC-DSA’s Labor Branch for 3 years, and the chair for a year and a half. I’ve helped roll out NYC-DSA’s rank and file labor work, including: branch presentations, Labor Notes-style trainings, rank and file jobs fair, one-on-ones, industry meetings, general meetings, debates, and educational events. I’ve helped organize labor and strike solidarity actions for GM strikers, NYSNA nurses, government employees, Delta employees, PT’s and OT’s, and striking Spectrum workers. I have gotten fellow construction workers involved in some of these actions. I’ve helped organize labor canvasses for DSA-endorsed electoral candidates. At the national level, I’ve taught the Labor 101 training and connected with DSA labor activists outside NYC.\n\nI’m most interested in developing our rank and file strategy work - deepening our organizing within big industries, bringing more organic workplace leaders into DSA, and bringing more DSA-ers into rank and file union jobs to organize. On the DSLC, I’d like to focus on developing our national industry networks, especially in industries that have received less  attention. I’m also interested in seeing the DSLC build out labor solidarity work around the country, drawing on the good examples and lessons from chapters that have done strong strike support work.\n\nI’m running as part of the Bread and Roses slate.",
  },
  {
    name: "Rebecca Garelli",
    chapter: "Phoenix",
    statement:
      "Greetings! My name is Rebecca and I am from the Phoenix Chapter of DSA and am running on the Bread and Roses Slate for DSLC.\n\nMy involvement in the labor movement stems from 11 years of active rank and file membership within the Chicago Teachers Union(CTU). As an active member, I attended monthly union meetings, wore red in solidarity every Friday, and most importantly I served on the Professional Problems Committee (PPC) at my school site. The PPC functions as an important tool to enforce the contract and protect member’s workplace rights. Through this role I learned how to advocate for myself, give voice to other members' ideas, problems and concerns, and work towards bringing concerns of the faculty to administration’s attention on a collective basis. As a CTU member, I also participated in the historic CTU 2012 strike. From this incredible experience I learned how to build an escalation plan, organize side-by-side with community stakeholders, and ultimately experience the collective power of our union. \n\nMy involvement within the labor movement is further demonstrated through my role as a Co-Founder and Lead Organizer for Arizona Educators United (AEU)/#RedforEd, a grassroots coalition of teachers, education support professionals, and community members. During the 2018 AEU organizing blitz, I played a vital role as the Actions Coordinator for AEU and successfully helped design an 8-week escalation plan that focused on educator empowerment, political education, community outreach, and building a network of 2,000 volunteer educators in over 1200 school sites across the state of Arizona which ultimately led to a massive 75,000 person march and six-day strike.\n\nIf elected to the DSLC, my goals include coordinating labor solidarity and mentoring local labor groups through building tool-kits and training modules, which can be used to enhance union organizing for members, or can serve as a guide for educators, and other workers, who are currently unrepresented to effectively begin organizing efforts in their locals.  I will focus on organizing the unorganized, through developing these tools and resources which can assist workers in deepening their understanding of organizing inside, outside, and alongside the union.",
  },
]

class Convention2021 extends React.Component {
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
    const name = candidate.name.split(" ")[0].toLowerCase().replace(/\./g, "")
    return this.images().find((image) => image.name === name).childImageSharp
      .fluid
  }

  render() {
    return (
      <Layout
        title="Convention 2021"
        color="blue"
        heroImageName="convention-2021"
      >
        <SEO title="Convention 2021" ogImage="home" />

        {/* <div className="content-column content-column-candidates">
          <Element name="candidates" id="candidates">
            <h2>Meet the NPC Candidates</h2>
          </Element>

          <div className="candidate-cards">
            {candidates.map((candidate, index) => (
              <div
                className="candidate-card"
                onClick={() => this.showModal(candidate)}
                onKeyPress={() => this.showModal(candidate)}
                key={candidate.name}
                role="button"
                tabIndex={index}
              >
                <CandidatePhoto
                  img={this.image(candidate)}
                  alt={candidate.name}
                />
                <div className="candidate-card__content">
                  <h3>{candidate.name}</h3>
                  <h4>{candidate.chapter}</h4>
                  <Button>Read more&hellip;</Button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="content-column"> */}
        <div className="content">
          <h2>Plan for a Powerful DSA</h2>
          <p>
            We have a world to win — one that prioritizes the needs of the many
            over the greed of a handful.
          </p>
          <p>
            DSA will help get us there. We should use this year's convention to
            make it powerful nationally and in every local chapter across the
            country.
          </p>
          <p>
            For DSA to play this historic role, we must act now in three ways:
          </p>
          <Collapse>
            <Panel
              header="Build working-class power by prioritizing electoral and labor work"
              key="1"
            >
              <p>
                We want to focus our efforts on the vehicles that can build
                working class power. That will require electing thousands of
                socialist organizers to office at all levels. It will mean
                transforming the labor movement into a militant, democratic, and
                powerful vehicle for rank-and-file power and class struggle. DSA
                can win transformative demands for labor, racial, and climate
                justice, guarantee healthcare housing and education for all as
                universal rights, and put us on track to win a socialist future.
              </p>
            </Panel>
            <Panel
              header="Be a visible tribune for socialism, rooted in the multiracial working class"
              key="2"
            >
              <p>
                We must transform DSA into an organization rooted in the
                multiracial working class through strategic organizing and by
                building up local DSA chapters around the country with permanent
                office spaces and full time organizing staff.
              </p>
              <p>
                DSA can proactively recruit workers and develop their leadership
                in the process of organizing campaigns that make a material
                difference in the lives of ordinary people.
              </p>
            </Panel>
            <Panel
              header="Evolve into a more democratic and better resourced organization"
              key="3"
            >
              <p>
                For DSA to grow, we need a national leadership with more time
                and capacity and more resources for local chapters to take on
                important strategic questions and long-term political planning.
                With more support, many more DSA chapters can become organizing
                powerhouses, capable of mapping their contexts and rooting
                themselves in them through collective struggle.
              </p>
              <p>
                We need a DSA that has the resources, organizational capacity,
                and democratic structures locally and nationwide to drive
                forward our political work, to effectively link up and support
                our local chapters and mass campaigns, and to enable our
                organization and its leadership to truly reflect this country’s
                diverse working class.
              </p>
            </Panel>
          </Collapse>
          <p style={{ marginTop: 30, textAlign: "center" }}>
            <Button
              type="primary"
              shape="round"
              size="large"
              icon="usergroup-add"
              onClick={() => navigate("/convention-2021-slate/")}
              style={{
                whiteSpace: "normal",
                height: "auto",
                minHeight: "60px",
                fontSize: 24,
              }}
            >
              NPC Slate
            </Button>
          </p>

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
              <h3>{this.state.candidate.chapter} DSA</h3>
              <CandidatePhoto
                img={this.image(this.state.candidate)}
                alt={this.state.candidate.name}
              />
              <ReactMarkdown
                renderers={{
                  link: (props) => (
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
  query Convention2021CandidatesQuery {
    allFile(filter: { absolutePath: { regex: "/headshots-dslc/" } }) {
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

export default Convention2021
