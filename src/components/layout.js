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
  const [ secondPage, setSecondPage ] = useState('contactPage')
  const [toggleSun, setToggleSun ] = useState('fas fa-sun')

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
        this.setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  useEffect(() => {
    setTimeout(() => {
      setGate('1')
    }, 15000)
  }, [])

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
    } else {
      setGate('1')
    }
  }

  // the typing in the begining 
  let myInitialRender;
  if (gate === '0') {
    myInitialRender = (
      <div className='loadingOverall'>
        <div>
          <h1 className='typewriter'>{'<h1> '}Hello World{' </h1>'}</h1>
        </div>
        <div>
          <h2 className='typewriterTwo'>{'<h2> '}I am {'<span> '}<span className='nameTag'>Nick</span>{' </span>'}{' </h2>'} </h2>
        </div>
        <div>
          <h2 className='typewriterThree'>{'<h2> '}This is my {'<span> '}<span className='nameTag'>Portfolio</span> {' </span>'}{'</h2>'}</h2>
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
                  <TwitterProject />
              <div className='sideText spaceTheText'>
                <h1 className={`${subTitleText}`}>Todo List</h1>
                <h4 className='spaceTheText'>Basic to do list that uses react.js, mongoDB and Node on the backend. This app now uses googles speech-to-text api and therefore now only works on chrome. </h4>
              </div>
            </div>
            <div className='spaceMePlease'>
                <ChemistryProject />
              <div className='sideText spaceTheText'>
                <h1 className={`${subTitleText}`}>Travel Foodie</h1>
                <h4 className='spaceTheText'>My travel blog. This uses gatsby with a node backend and auth0. Talks about South East Asia and Eastern Washington, constantly being updated with new content as I travel!</h4>
              </div>
            </div>
            <div className='spaceMePlease'>
                <DogProject />
              <div className='sideText spaceTheText'>
                <h1 className={`${subTitleText}`}>Rent-A-Dog</h1>
                <h4 className='spaceTheText'>Uses React and a node backend to link up users with adoptable dogs from a variety of agencies through petfinders api.</h4>
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
        <h1>Leave Me A Message!</h1>
        <SEO title="Contact Page" />
          <form onSubmit={submitForm} action="https://formspree.io/meqelkae" method="POST" className='myContactForm'>
            <label>Name:  </label>
            <input type="text" name="name"/><br />
            <label>Email:  </label>
            <input type="email" name="email" /><br />
            <label>Message:</label>
            <textarea type="text" name="message" rows='10' cols='50'></textarea><br />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        <button className='buttonSpacingTwo' onClick={handleChangeReturn}>Go back to the homepage</button>
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
