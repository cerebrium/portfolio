import React, { useState, useEffect } from "react"
import Resume from '../images/ResumeHuman.pdf'
import { Link } from 'gatsby'
import "./layout.css"
import SEO from './seo'
import DogProject from './dogProject'
import ChemistryProject from './chemistryProject'
import TwitterProject from './twitterProject'

// Some state is giong on here
// another one
 export default () => {
  const [ modeToggle, setModeToggle ] = useState('overallDiv')
  const [ titleToggle, setTitleToggle ] = useState('titleText')
  const [ titleToggleTwo, setTitleToggleTwo ] = useState('titleTextTwoDark')
  const [ subTitleText, setSubTitleText ] = useState('subTitleTextDark')
  const [ spaceMeTop, setSpaceMeTop ] = useState('spaceMePleaseTopCurrDark')
  const [ gate, setGate ] = useState('0')
  const [status, setStatus] = useState('')
  const [ secondPage, setSecondPage ] = useState('contactPageDark')
  const [toggleSun, setToggleSun ] = useState('fas fa-sun')
  const [ responseText, setResponseText ] = useState('Submit')

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  useEffect(() => {
    setTimeout(() => {
      setGate('1')
    }, 5500)
  }, [])

  function buttonSubmitted () {
    setResponseText('Thanks')
  }

  function handleClick() {
    if (modeToggle === 'lightOverallDiv') {
      setToggleSun('fas fa-sun')
      setModeToggle('overallDiv')
      setTitleToggle('titleTextDark')
      setTitleToggleTwo('titleTextTwoDark')
      setSubTitleText('subTitleTextDark')
      setSpaceMeTop('spaceMePleaseTopCurrDark')
      setSecondPage('contactPageDark')
    } else {
      setToggleSun('fas fa-moon')
      setModeToggle('lightOverallDiv')
      setTitleToggle('titleText')
      setTitleToggleTwo('titleTextTwo')
      setSubTitleText('subTitleTexts')
      setSpaceMeTop('spaceMePleaseTopCurr')
      setSecondPage('contactPage')
    }
  }
  let handleChangeReturn = () => {
    if (gate === '1') {
      setGate('2')
      setResponseText('Submit')
    } else {
      setGate('1')
      setResponseText('Submit')
    }
  }

  // the typing in the begining 
  let myInitialRender;
  if (gate === '0') {
    myInitialRender = (
      <div className='loadingOverall'>
        <div>
          <h1 className='typewriter'>Hello World... I am <span className='nameTag'>Nick</span></h1>
        </div>
      </div>
    )
    // non-email page
  } else if (gate === '1') {
    myInitialRender = (
      <div className={`${modeToggle}`}>
        <div className='headerClass'>
          <div className='whiteBoxTop'>
              <div className='spacerDiv'></div>
              <h2 className={`${titleToggle}`}>Nicholas Shankland | <span className='frontEndDeveloper'>Front End Developer</span></h2>
              <h4 className='spaceMePleaseTopText'>Visual design solutions and react lover. I enjoy working on projects with people and <br />companies 
                interested in finding the most visually appealing and intuitive solutions.</h4>
              <div className='favicons'>
                <i class="fas fa-envelope" id='topEmail' onClick={handleChangeReturn}></i>
                <a href='https://github.com/cerebrium' title='Link to my Github' target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" id='topGithub'></i></a> 
                <a href="https://www.linkedin.com/in/nicholasshankland/" title='Link to my LinkIn page' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" id='topLinkedin'></i></a> {' '}
                <a href={Resume} title='My resume' target="_blank" rel="noopener noreferrer"><i className="fas fa-file" id='topFile'></i></a><br />
              </div><br />
          </div>
        </div>
        <div className='headerClassSun'>
          <i onClick={() => handleClick()} className={`${toggleSun}`} id='sun' title='Toggle between light and dark modes'></i>
        </div>
          <main>
            <SEO title="Home" />
            
            <h1 className={`${spaceMeTop}`}>Current Projects</h1>
            <div className='spaceMePlease'>
                <ChemistryProject />
              <div className='sideText spaceTheText'>
                <h1 className={`${subTitleText}`}>Bloggify</h1>
                <h4 className='spaceTheText'>My Blog. Talks about places I have travelled, things I have eaten, and some programming things I have learned. </h4>
              </div>
            </div>
            <div className='spaceMePlease'>
                <DogProject />
              <div className='sideText spaceTheText'>
                <h1 className={`${subTitleText}`}>Amazon Services</h1>
                <h4 className='spaceTheText'>Uses Gatsby to show a delivery service website for a company in the UK. Uses lazy loading imports for the images.</h4>
              </div>
            </div>
            <div className='spaceMePlease'>
                  <TwitterProject />
              <div className='sideText spaceTheText'>
                <h1 className={`${subTitleText}`}>Todo List (chrome only)</h1>
                <h4 className='spaceTheText'> Full MERN stack app for basic to-do list. This app now uses googles speech-to-text api and therefore now only works on chrome. Hosted on Heroku and takes ~30 seconds to load. </h4>
              </div>
            </div>
          </main>
        <footer className='footerClass'>
        </footer>
      </div>
    )
  } else if (gate === '2'){
    myInitialRender = (
        <div className={`${secondPage}`}>
        <h1 className='leaveMeAMessage'>Leave Me A Message!</h1>
        <SEO title="Contact Page" />
          <form onSubmit={submitForm} action="https://formspree.io/meqelkae" method="POST" className='myContactForm'>
            <label>Name:  </label>
            <input type="text" name="name" className='inputArea'/><br />
            <label>Email:  </label>
            <input type="email" name="email" className='inputArea'/><br />
            <label>Message:</label>
            <textarea type="text" name="message" className='textArea'></textarea><br />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button className='buttonSpacingThree' onClick={buttonSubmitted}>{responseText}</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        <button className='buttonSpacingTwo' onClick={handleChangeReturn}>Return</button>
      </div>
    )
  }
  // the return part
  return (
    <>
      {myInitialRender}
    </>
  )
}
