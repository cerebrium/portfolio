import React from "react"
import PropTypes from "prop-types"
import Resume from '../images/Resume.pdf'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <Header siteTitle={'Nicholas Shankland | Full Stack Developer'} />
      <div className='headerClass'>
        <a href='https://github.com/cerebrium' title='Link to my Github' target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" id='topGithub'></i></a> 
        <a href="https://reactresources.com/" title='Link to react resources' target="_blank" rel="noopener noreferrer"><i className="fab fa-react" id='topReact'></i></a> {' '}
        <a href="https://www.linkedin.com/in/nicholasshankland/" title='Link to my LinkIn page' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" id='topLinkedin'></i></a> {' '}
        <a href={Resume} title='My resume' target="_blank" rel="noopener noreferrer"><i className="fas fa-file" id='topFile'></i></a>
      </div>
      <main>
        {children}
      </main>
      <footer className='footerClass'>
        <a href='https://github.com/cerebrium' title='Link to my Github' target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a> 
        <a href="https://reactresources.com/" title='Link to react resources' target="_blank" rel="noopener noreferrer"><i className="fab fa-react" id='reactOne'></i></a> 
        <a href="https://www.linkedin.com/in/nicholasshankland/" title='Link to my LinkIn page' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" id='linkedinOne'></i></a>
        <a href={Resume} title='My resume' target="_blank" rel="noopener noreferrer"><i className="fas fa-file" id='fa-files'></i></a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
