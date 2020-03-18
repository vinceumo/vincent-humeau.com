import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import About from "../components/sections/about";

import indexData from "../content/index.yml";

const getSection = (data) => {
  switch (data.type) {
    case "about": 
      return (<About copy={data.copy} />)
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      {indexData.sections.map((section, index) => {
        return (
          <section key={`content_item_${index}`}>
            <h2>{section.title}</h2>
            {getSection(section)}
          </section>
        )
      })}
    </main>
  </Layout>
)

export default IndexPage
