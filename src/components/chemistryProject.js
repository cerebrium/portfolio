import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChemistryProject = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "chemistry-game.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div className='imageStyler'>
      <a href="https://cerebrium.github.io/chemGamey/" target="_blank" rel="noopener noreferrer"><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/chemistry-game.png"/></a>
  </div> )
}

export default ChemistryProject
