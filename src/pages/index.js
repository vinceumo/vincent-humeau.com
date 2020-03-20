import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import About from "../components/sections/about"

import indexData from "../content/index.yml"

const getSection = (type, html)=> {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
  // switch (type) {
  //   case "about":
  //     return <div dangerouslySetInnerHTML={{ __html: html }} />
  //     // return <About copy={data.copy} />
    
  // }
}

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { nodes } = allMarkdownRemark
  console.log(nodes);
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        {nodes.sort((a, b) => a.frontmatter.order - b.frontmatter.order).map(({ html, frontmatter }, index) => {
          return (
            <section key={`content_item_${index}`}>
              <h2>{frontmatter.title}</h2>
              {getSection(frontmatter.type, html)}
            </section>
          )
        })}
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          type
          title
          order
        }
      }
    }
  }
`
