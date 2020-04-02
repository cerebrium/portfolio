import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// a comment
const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        marginLeft: 50,
        maxWidth: 300,
        padding: `1.45rem 1.0875rem 0`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'rgb(83, 81, 81)',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Portfolio`,
}

export default Header
