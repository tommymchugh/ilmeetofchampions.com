import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(31, 43, 83)`,
      marginBottom: `1.45rem`,
      width: `100%`,
      zIndex: `1000`,
      height: `69px`
    }}
  >
  <ul>
    <li><a href="#stay-updated">Stay Updated</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#north">North Lawndale</a></li>
    <li><a href="#support">Sponsorship</a></li>
    <li><a href="#meet-info">Registration</a></li>
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
