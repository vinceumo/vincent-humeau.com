import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <div className="section-heading clip-content-scroll-container">
        <div className="clip-content-scroll-content">
          <div className="clip-content-scroll-content-inner">
            <h2>404</h2>
          </div>
        </div>
      </div>
      <div className="section-content">
        <p>Sorry This page do not exist 😭</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
