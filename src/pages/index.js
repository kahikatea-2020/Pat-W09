import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>I have never tried gatsby before, but here we go</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
