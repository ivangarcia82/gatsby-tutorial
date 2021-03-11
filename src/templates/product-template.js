import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import {GatsbyImage} from 'gatsby-plugin-image'

const ProductTemplate = ({ data:{product:{title, price, info:{info}, image:{gatsbyImageData}}} }) => {
return (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <Link to="/products">Back to Products</Link>
      <h1>single product : {title}</h1>
    </div>
    <section className="single-product">
      <article>
        <GatsbyImage image={gatsbyImageData} alt={title} />
      </article>
      <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
      </article>
    </section>
  </Layout>
)

}

export const query = graphql`
  query MyQuery($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      image {
        gatsbyImageData(width: 300, layout: FIXED)
      }
      slug
      price
      title
      info {
        info
      }
    }
  }
`

export default ProductTemplate
