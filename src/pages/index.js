import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const getSectionContent = (type, html) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

const IndexPage = ({ data }) => {
  const { allMarkdownRemark, allMdx } = data
  
  const nodes = [...allMarkdownRemark.nodes,  ...allMdx.nodes];
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        {nodes
          .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
          .map(({ html, frontmatter }, index) => {
            return (
              <section key={`content_item_${index}`}>
                <h2>{frontmatter.title}</h2>
                {getSectionContent(frontmatter.type, html)}
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
    allMdx {
      nodes {
        html
        frontmatter {
          order
          title
          type
        }
      }
    }
  }
`
