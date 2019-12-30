import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(82,102,118)`,
      background: `linear-gradient(90deg, rgba(82,102,118,0) 0%, rgba(112,137,156,1) 100%)`,
      marginBottom: `1.45rem`,
      position: `absolute`,
      width: `100%`,
      zIndex: `1000`,
      height: `69px`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
