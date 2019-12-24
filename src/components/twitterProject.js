import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TwitterProject = () => {
    const data = useStaticQuery(graphql`
      query {
        fileName: file(relativePath: { eq: "twitterApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (<div style={{ width: '70vh', margin: '2%', objectFit: 'cover'  }}>
      <a href="https://mysterious-chamber-57760.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Img fluid={data.fileName.childImageSharp.fluid} alt="../images/twitterApp.png"/></a>
    </div>
    )
}

export default TwitterProject
