import React from "react"
import { css } from "glamor"
import propTypes from "prop-types"
import GreyImage from "./GreyImage"

const photoWithText = css({
  width: `100%`,
  height: `100%`,
  position: "relative",
})

const photoText = css({
  position: `absolute`,
  textAlign: `center`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  color: "white",
})

const PhotoWithTextOverlay = props => (
  <div {...photoWithText}>
    <GreyImage src={props.src} fluid={props.fluid} imgStyle={props.imgStyle} />
    <div {...photoText}>
      <p {...props.textStyle}>{props.text}</p>
      <p {...props.subTextStyle}>{props.subText}</p>
    </div>
  </div>
)

PhotoWithTextOverlay.propTypes = {
  src: propTypes.string,
  text: propTypes.string.isRequired,
  textStyle: propTypes.object,
  subText: propTypes.string,
  subTextStyle: propTypes.object,
}

export default PhotoWithTextOverlay
