import React from "react"
import Layout from "../components/layout"
import Section from "../components/organisms/section/section"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { allMdx } = data
  const { nodes } = allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        {nodes
          .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
          .map(({ frontmatter, body }, index) => {
            return (
              <Section
                key={`content_item_${index}`}
                content={body}
                title={frontmatter.title}
              />
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
