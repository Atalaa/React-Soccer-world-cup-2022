import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Groups = () => {
  return (
    <Layout>
      <Seo title="Groups" />
      <div className="container-fluid">
        <div>
          <Link to="/groups/teams" className="navbar-brand">
            <h3>Group A</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default Groups
