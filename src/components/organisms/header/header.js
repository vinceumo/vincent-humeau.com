import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../../molecules/logo/logo"
import "./_header.scss"
import social from "../../../content/social";

const Header = ({ siteTitle }) => {
  return (
    <header>

      <Link className="logo-container" to="/">
        <Logo />
        <h1>{siteTitle}</h1>
      </Link>
      <ul className="social">
        {social.map(el => <li key={el.name}><a target="_blank" rel="noopener noreferrer" href={el.url}>{el.name}</a></li>)}
      </ul>
      <div className="controls"></div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
