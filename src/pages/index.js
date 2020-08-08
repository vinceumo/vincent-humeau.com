import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// const getSectionContent = (type, html) => {
//   return <div dangerouslySetInnerHTML={{ __html: html }} />
// }

const IndexPage = ({ data }) => {
  const { allMdx } = data;
  const { nodes } = allMdx;
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        {nodes
          .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
          .map(({ frontmatter, body }, index) => {
            return (
              <section key={`content_item_${index}`}>
                <h2>{frontmatter.title}</h2>
                <MDXRenderer>{body}</MDXRenderer>
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
    allMdx {
      nodes {
        frontmatter {
          order
          title
          type
        }
        body
      }
    }
  }
`
