import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitterProject from "../components/twitterProject"
import ChemistryProject from "../components/chemistryProject"
import DogProject from "../components/dogProject"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4 className='spaceMePleaseTop'>Visual design solutions and react lover. I enjoy working on projects with people and companies 
    interested in finding the most visually appealing and intuitive solutions.</h4>
  
    <h3 className='spaceMePleaseTopCurr'>Current Projects</h3>

    <div className='spaceMePlease'>
        <DogProject />
      <div className='sideText spaceTheText'>
        <h1>Rent-A-Dog</h1>
        <h4 className='spaceTheText'>Uses React and a node backend to link up users with adoptable dogs from a variety of agencies through petfinders api.</h4>
      </div>
    </div>
    <div className='spaceMePlease'>
        <ChemistryProject />
      <div className='sideText spaceTheText'>
        <h1>Travel Foodie</h1>
        <h4 className='spaceTheText'>My travel blog. This uses gatsby with a node backend and auth0. Talks about South East Asia and Eastern Washington, constantly being updated with new content as I travel!</h4>
      </div>
    </div>

    

    <div className='spaceMePlease'>
          <TwitterProject />
      <div className='sideText spaceTheText'>
        <h1>Todo List</h1>
        <h4 className='spaceTheText'>Basic to do list that uses react.js, mongoDB and Node on the backend. This app now uses googles speech-to-text api and therefore now only works on chrome. </h4>
      </div>
    </div>

  </Layout>
)

export default IndexPage
