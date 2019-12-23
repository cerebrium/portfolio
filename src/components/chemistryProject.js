import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChemistryProject = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "chemistry-game.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div style={{ width: '70vh', margin: '2%'  }}>
      <a href="https://cerebrium.github.io/chemGamey/" target="_blank"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></a>
  </div> )
}

export default ChemistryProject
