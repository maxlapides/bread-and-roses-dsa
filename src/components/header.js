import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu, Icon } from "antd"
import { globalHistory } from "@reach/router"

class Header extends React.Component {
  findKey = pathName => {
    return this.props.menuLinks.find(link => link.link === pathName).name
  }

  render() {
    return (
      <Menu
        selectedKeys={[this.findKey(globalHistory.location.pathname)]}
        mode="horizontal"
      >
        {this.props.menuLinks.map(link => (
          <Menu.Item key={link.name}>
            <Link to={link.link}>
              {link.link === "/" && <Icon type="home" />}
              {link.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
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
