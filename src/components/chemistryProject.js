import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// hello world
const ChemistryProject = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "travelBlog.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (<div className='imageStyler'>
      <a href="https://bloggify.netlify.com/" target="_blank" rel="noopener noreferrer" className='imagePicture'><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/travelFoodie.png" className='imagePicture'/></a>
  </div> )
}

export default ChemistryProject
