import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { groups } from "./thegroups.module.css"

const Thegroups = ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <Seo title="Groups" />
      <div className={groups}>
        {data.allFile.nodes.map((e, index) => {
          return (
            <Link
              key={index}
              to={`/thegroups/${e.name}`}
              className="navbar-brand"
            >
              <h3>Group {e.name.toUpperCase()}</h3>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
export default Thegroups

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "thegroups" } }) {
      nodes {
        name
      }
    }
  }
`
