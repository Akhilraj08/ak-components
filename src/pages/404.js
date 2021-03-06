import React from "react"

import Layout from "../inner-components/layout"
import SEO from "../inner-components/seo"

//import '../inner-components/layout.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
