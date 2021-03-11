import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from '../images/copy/image2.jpeg'
import {GatsbyImage} from 'gatsby-plugin-image'
const Images = () => {
    const getImages = graphql`
      {
        file(relativePath: { eq: "image3.jpeg" }) {
          childImageSharp {
              gatsbyImageData(width:300, height:400 layout: FIXED)
          }
        }
        fluid: file(relativePath: { eq: "image1.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    `
    const data = useStaticQuery(getImages)
    console.log(data)
    return (

      <section className="images">
        <article className="single-image">
          <h3>basic image</h3>
          <img src={img} width="100%" alt=""/>
        </article>

        <article className="single-image">
          <h3>fixed image/blur</h3>
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        </article>

        <article className="single-image">
          <h3>fluid image/svg</h3>
        <GatsbyImage image={data.fluid.childImageSharp.gatsbyImageData}/>

        </article>
      </section>
    )
}

export default Images
