import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./_section.scss"

const Section = ({ title, content }) => {
  return (
    <section>
      <div className="section-heading clip-content-scroll-container">
        <div className="clip-content-scroll-content">
          <div className="clip-content-scroll-content-inner">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className="section-content">
        <MDXRenderer>{content}</MDXRenderer>
      </div>
    </section>
  )
}

export default Section
