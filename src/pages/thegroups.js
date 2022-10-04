import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Thegroups = () => {
  return (
    <Layout>
      <Seo title="Groups" />
      <div className="container-fluid">
        <div>
          <Link to="/thegroups/a" className="navbar-brand">
            <h3>Group A</h3>
          </Link>
          <Link to="/thegroups/b" className="navbar-brand">
            <h3>Group B</h3>
          </Link>
          <Link to="/thegroups/c" className="navbar-brand">
            <h3>Group C</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default Thegroups
