import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const A = ({ data }) => {
  console.log("data", data)
  return (
    <div>
      {data.allFile.nodes.map(e => (
        <GatsbyImage
          key={e.childImageSharp.id}
          image={e.childImageSharp.gatsbyImageData}
          alt={e.name}
        />
      ))}
    </div>
  )
}

export default A

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "groupA" } }) {
      nodes {
        childImageSharp {
          id
          gatsbyImageData
        }
        name
      }
    }
  }
`
