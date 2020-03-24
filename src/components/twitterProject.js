import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TwitterProject = () => {
    const data = useStaticQuery(graphql`
      query {
        fileName: file(relativePath: { eq: "todolist.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (<div className='imageStyler'>
      <a href="https://todoleest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/twitterApp.png" className='imagePicture'/></a>
    </div>
    )
}

export default TwitterProject
