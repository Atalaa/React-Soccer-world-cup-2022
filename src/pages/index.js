import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FlipCountdown from "@rumess/react-flip-countdown"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <StaticImage
            src="../images/gatsby-trophyy.png"
            width={280}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Trophy of Soccer World Cup"
            className="img-fluid mb-5"
          />
          <FlipCountdown
            hideYear
            size="small"
            endAt={"2022-11-20 11:00:00"} // Date/Time
            endAtZero
          />
        </div>
      </div>
      {/* <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div> */}
    </section>
  </Layout>
)

export default IndexPage
