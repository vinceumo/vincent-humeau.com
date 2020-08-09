import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./_section.scss"

const Section = ({ title, content }) => {
  return (
    <section>
      <div className="section--heading"><h2>{title}</h2></div>
      <div><MDXRenderer>{content}</MDXRenderer></div>
    </section>
  )
}

export default Section
