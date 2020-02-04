import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DogProject = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "dogApp.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div className='imageStyler'>
      <a href="https://sleepy-tor-36924.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/dogApp.png" className='imagePicture'/></a>
  </div> )
}

export default DogProject
