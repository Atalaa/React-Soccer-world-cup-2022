import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Groups = ({ data }) => {
  return (
    <Layout>
      <Seo title="Groups" />
      <div>
        <h1>Groups</h1>
        <p>You just hit a group</p>
        <div>
          {data.allFile.nodes.map(e => {
            console.log("e", e)
            return (
              <GatsbyImage
                key={e.childImageSharp.id}
                image={e.childImageSharp.gatsbyImageData}
                alt="drapeaux pays"
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export default Groups

export const query = graphql`
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
      }
    }
  }
`
