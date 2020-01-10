import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChemistryProject = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "travelFoodie.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div className='imageStyler'>
      <a href="https://travelfoodie.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/travelFoodie.png"/></a>
  </div> )
}

export default ChemistryProject
