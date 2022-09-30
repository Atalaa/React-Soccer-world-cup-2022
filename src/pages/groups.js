import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Groups = ({ data }) => {
  return (
    <Layout>
      <Seo title="Groups" />
      <div>
        <h1>Groups</h1>
        <p>You just hit a group</p>
        <p>{data.site.siteMetadata.description}</p>
      </div>
    </Layout>
  )
}
export default Groups

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
