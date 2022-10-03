import { useStaticQuery } from "gatsby"
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Card = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: { nin: ["gatsby-icon.png", "gatsby-trophyy.png"] }
        }
      ) {
        nodes {
          childImageSharp {
            id
            gatsbyImageData
          }
          name
        }
      }
    }
  `)

  return (
    <div>
      {data.allFile.nodes.map(e => {
        console.log("e", e)
        return (
          <GatsbyImage
            key={e.childImageSharp.id}
            image={e.childImageSharp.gatsbyImageData}
            alt={e.name}
          />
        )
      })}
    </div>
  )
}

export default Card
