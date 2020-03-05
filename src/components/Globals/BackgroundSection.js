import React from "react"
import BackgroundSImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundSImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundSImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection
