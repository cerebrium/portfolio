import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TwitterProject = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "twitterApp.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (<div style={{ width: '70vh', margin: '2%'  }}>
      <a href="https://mysterious-chamber-57760.herokuapp.com/" target="_blank"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></a>
    </div>
    )
}

export default TwitterProject
