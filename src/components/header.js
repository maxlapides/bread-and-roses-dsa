import { Link } from "gatsby"
import React from "react"
import { Menu, Layout as AntLayout } from "antd"
import { globalHistory } from "@reach/router"

import { Join } from "./join"

class Header extends React.Component {
  state = {
    selected: globalHistory.location.pathname,
  }

  handleClick = key => this.setState({ selected: key })

  render() {
    return (
      <AntLayout.Header>
        <Menu mode="horizontal" selectedKeys={[this.state.selected]}>
          {this.props.menuLinks.map(link => (
            <Menu.Item
              key={link.link}
              onClick={() => this.handleClick(link.link)}
            >
              <Link to={link.link}>{link.name}</Link>
            </Menu.Item>
          ))}
          <Menu.Item key="call">
            <a
              href="https://socialistcall.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Call
            </a>
          </Menu.Item>
          <Menu.Item key="join">
            <Join />
          </Menu.Item>
        </Menu>
      </AntLayout.Header>
    )
  }
}

export default Header
