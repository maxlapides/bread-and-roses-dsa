import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import onClickOutside from "react-onclickoutside"

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
        <li>
          <Link to="/tasks/">Tasks for 2019</Link>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={() => this.setSubmenuHover(true)}
          onMouseLeave={() => this.setSubmenuHover(false)}
        >
          <div className="submenu-label" onClick={this.toggleSubmenuVisible}>
            DSA Convention 2019
          </div>
          <ul
            className={classNames({
              visible: this.state.submenuHover || this.state.submenuVisible,
            })}
          >
            <li className="indented">
              <Link to="/convention/npc-slate/">NPC Slate</Link>
            </li>
            <li className="indented">
              <Link to="/convention/our-proposals/">Our Proposals</Link>
            </li>
            <li className="indented">
              <Link to="/convention/follow-the-debates/">Follow the Debates</Link>
            </li>
          </ul>
        </li>
        <li>
          <ExternalLink href="https://socialistcall.com/">
            Read <em>The Call</em>
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://forms.gle/M6vVT4JQTJQcr7Tf8">
            Join Bread &amp; Roses
          </ExternalLink>
        </li>
      </ul>
    )
  }
}

export default onClickOutside(MenuLinks)
