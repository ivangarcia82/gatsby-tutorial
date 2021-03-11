import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import * as styles from "../components/products.module.css"
import { GatsbyImage } from "gatsby-plugin-image"



const Products = ({data}) => {
  const {allContentfulProduct:{nodes:products}} = data
  console.log(products)
  return(
    <Layout>
      <section className={styles.page}>
        {products.map((product)=>{

          return <article key={product.id}>
            <GatsbyImage image={product.image.gatsbyImageData} alt={product.title}/>
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/products/${product.slug}`}>More Details</Link>
          </article>

        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
  allContentfulProduct {
    nodes {
      id
      price
      title
      slug
      image {
        gatsbyImageData(width:400 layout: FIXED)
      }
    }
  }

  }
`

export default Products
