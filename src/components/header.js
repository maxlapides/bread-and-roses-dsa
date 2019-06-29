import { Link } from "gatsby"
import React from "react"
// import { Menu, Layout as AntLayout, Icon } from "antd"
import { Location } from "@reach/router"
import { stack as Menu } from "react-burger-menu"

import Logo from "../images/logo-mark-white.svg"
import { Join } from "./join"
import "./header.scss"

/*
const HeaderOLD = ({ menuLinks }) => (
  <Location>
    {({ location }) => (
      <AntLayout.Header>
        <Menu mode="horizontal" selectedKeys={[location.pathname]}>
          {menuLinks.map(link => (
            <Menu.Item key={link.link}>
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
          <Menu.Item key="facebook">
            <a
              href="https://www.facebook.com/breadandrosesdsa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="facebook" theme="filled" />
            </a>
          </Menu.Item>
        </Menu>
      </AntLayout.Header>
    )}
  </Location>
)
*/

const Header = ({ menuLinks }) => (
  <Menu>
    <Link to="/">
      <Logo className="menu-logo" />
    </Link>
    {menuLinks.map(link => (
      <Link to={link.link} key={link.name}>
        {link.name}
      </Link>
    ))}
  </Menu>
)

export default Header
