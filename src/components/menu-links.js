/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react"
import { Link } from "gatsby"
import onClickOutside from "react-onclickoutside"
import classNames from "classnames"

import ExternalLink from "./external-link"

class MenuLinks extends React.Component {
  state = {
    resourcesSubmenuHover: false,
    resourcesSubmenuVisible: false,
    conventionSubmenuHover: false,
    conventionSubmenuVisible: false,
  }

  setResourcesSubmenuHover = (isHovered) => {
    this.setState({ resourcesSubmenuHover: isHovered })
  }

  toggleResourcesSubmenuVisible = () => {
    this.setState((prevState) => ({
      resourcesSubmenuVisible: !prevState.resourcesSubmenuVisible,
    }))
  }

  setConventionSubmenuHover = (isHovered) => {
    this.setState({ conventionSubmenuHover: isHovered })
  }

  toggleConventionSubmenuVisible = () => {
    this.setState((prevState) => ({
      conventionSubmenuVisible: !prevState.conventionSubmenuVisible,
    }))
  }

  handleClickOutside = (evt) => {
    this.setState({
      resourcesSubmenuVisible: false,
      conventionSubmenuVisible: false,
    })
  }

  render() {
    return (
      <ul>
        {/* {menuLinks.map(link => (
          <li
            key={link.name}
            className={`level-${link.link.split("/").length - 1}`}
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))} */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/where-we-stand/">Where We Stand</Link>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={() => this.setConventionSubmenuHover(true)}
          onMouseLeave={() => this.setConventionSubmenuHover(false)}
        >
          <div
            className="submenu-label"
            onClick={this.toggleConventionSubmenuVisible}
          >
            Convention 2021
          </div>
          <ul
            className={classNames({
              visible:
                this.state.conventionSubmenuHover ||
                this.state.conventionSubmenuVisible,
            })}
          >
            <li className="indented">
              <Link to="/convention-2021/">Overview</Link>
            </li>
            <li className="indented">
              <Link to="/convention-2021-slate/">NPC Slate</Link>
            </li>
            <li className="indented">
              <Link to="/convention-2021-resolutions/">Resolutions</Link>
            </li>
            <li className="indented">
              <Link to="/convention-2021-vision/">Convention Vision</Link>
            </li>
            <li className="indented">
              <ExternalLink href="https://breadandrosesdsa.us8.list-manage.com/subscribe?u=9448901c8beae38362c8093d1&id=c2b8e01b0d">
                Subscribe for Updates
              </ExternalLink>
            </li>
          </ul>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={() => this.setResourcesSubmenuHover(true)}
          onMouseLeave={() => this.setResourcesSubmenuHover(false)}
        >
          <div
            className="submenu-label"
            onClick={this.toggleResourcesSubmenuVisible}
          >
            Resources
          </div>
          <ul
            className={classNames({
              visible:
                this.state.resourcesSubmenuHover ||
                this.state.resourcesSubmenuVisible,
            })}
          >
            <li className="indented">
              <Link to="/reading-list/">Reading List</Link>
            </li>
            <li className="indented">
              <Link to="/archive/">Archive</Link>
            </li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://socialistcall.com/">
            Read <em>The Call</em>
          </ExternalLink>
        </li>
        <li>
          <Link to="/join/">Join Bread &amp; Roses</Link>
        </li>
      </ul>
    )
  }
}

export default onClickOutside(MenuLinks)
