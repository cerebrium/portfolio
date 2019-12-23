import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DogProject = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dogApp.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div style={{ width: '70vh', margin: '2%' }}>
      <a href="https://sleepy-tor-36924.herokuapp.com/" target="_blank"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></a>
  </div> )
}

export default DogProject
