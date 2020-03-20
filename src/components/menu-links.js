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
    submenuHover: false,
    submenuVisible: false,
  }

  setSubmenuHover = isHovered => {
    this.setState({ submenuHover: isHovered })
  }

  toggleSubmenuVisible = () => {
    this.setState(prevState => ({ submenuVisible: !prevState.submenuVisible }))
  }

  handleClickOutside = evt => {
    this.setState({ submenuVisible: false })
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
          onMouseEnter={() => this.setSubmenuHover(true)}
          onMouseLeave={() => this.setSubmenuHover(false)}
        >
          <div className="submenu-label" onClick={this.toggleSubmenuVisible}>
            Resources
          </div>
          <ul
            className={classNames({
              visible: this.state.submenuHover || this.state.submenuVisible,
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
