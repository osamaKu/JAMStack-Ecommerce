import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Info from "../components/Home/Info"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSImage from "../components/Globals/BackgroundSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSImage
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
