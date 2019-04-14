import React from "react"
import { css } from "glamor"
import Gallery from "react-photo-gallery"

const header = css({
  textTransform: "uppercase",
  textAlign: "center",
  margin: "30px 0 30px 0",
})

const stripe = css({
  height: "50px",
  backgroundColor: "black",
})

const headerFontStyle = css({
  "@media(max-width: 400px)": {
    fontSize: "1.4rem",
  },
})

const PhotoGallery = props => {
  const PHOTO_SET = props.photos
    .filter(
      edge => edge.node.childImageSharp && edge.node.childImageSharp.fixed
    )
    .map(edge => {
      const photo = edge.node.childImageSharp.fixed
      return {
        src: photo.src,
        srcSet: photo.srcSet.split(","),
        height: photo.height,
        width: photo.width,
      }
    })
  return (
    <div>
      <div {...stripe} />
      <div {...header}>
        <h1 {...headerFontStyle}>{props.title}</h1>
      </div>
      <Gallery photos={PHOTO_SET} />
    </div>
  )
}

export default PhotoGallery
