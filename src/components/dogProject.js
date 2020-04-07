import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DogProject = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "daveDesigns.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div className='imageStyler'>
      <a href="https://davedesigns.netlify.com/" target="_blank" rel="noopener noreferrer"><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/daveDesigns.png" className='imagePicture'/></a>
  </div> )
}

export default DogProject
