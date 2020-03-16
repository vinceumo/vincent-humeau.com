import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import indexData from "../content/index.yml";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {indexData.sections.map((section, index) => {
        return <li key={`content_item_${index}`}>{section.title}</li>
      })}
    </ul>
  </Layout>
)

export default IndexPage
