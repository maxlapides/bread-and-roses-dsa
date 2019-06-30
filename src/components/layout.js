/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import { Layout as AntLayout } from "antd"
import Helmet from "react-helmet"

import Logo from "../images/logo.svg"
import Header from "./header"
import Hero from "./hero"
import TopNav from "./top-nav"
import "antd/dist/antd.less"
import "./layout.scss"

const Layout = ({ title, color, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lora&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <AntLayout>
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <TopNav menuLinks={data.site.siteMetadata.menuLinks} />
          <Hero title={title} color={color} />
          <AntLayout.Content>{children}</AntLayout.Content>
        </AntLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
