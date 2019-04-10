import { Link } from "gatsby"
import React from "react"
import { Menu, Layout as AntLayout } from "antd"
import { globalHistory } from "@reach/router"

import { Join } from "./join"

const Header = ({ menuLinks }) => (
  <AntLayout.Header>
    <Menu mode="horizontal" selectedKeys={[globalHistory.location.pathname]}>
      {menuLinks.map(link => (
        <Menu.Item key={link.link}>
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

export default Header
