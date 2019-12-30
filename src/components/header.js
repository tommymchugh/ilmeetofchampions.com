import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(112,137,156,.85)`,
      marginBottom: `1.45rem`,
      width: `100%`,
      zIndex: `1000`,
      height: `69px`
    }}
  >
  <ul>
    <li><a href="#stay-updated">Stay Updated</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#meet-info">Meet Info</a></li>
    <li><a href="#venue">Venue</a></li>  
  </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
