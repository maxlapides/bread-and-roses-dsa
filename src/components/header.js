import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu, Layout as AntLayout } from "antd"
import { globalHistory } from "@reach/router"

import { Join } from "./join"

class Header extends React.Component {
  findKey = pathName => {
    return this.props.menuLinks.find(link => link.link === pathName).name
  }

  render() {
    return (
      <AntLayout.Header>
        <Menu
          mode="horizontal"
          selectedKeys={[this.findKey(globalHistory.location.pathname)]}
        >
          {this.props.menuLinks.map(link => (
            <Menu.Item key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </Menu.Item>
          ))}
          <Menu.Item>
            <a
              href="https://socialistcall.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Call
            </a>
          </Menu.Item>
          <Menu.Item>
            <Join />
          </Menu.Item>
        </Menu>
      </AntLayout.Header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
