import React from "react"
import propTypes from "prop-types"
import { css } from "glamor"
import GreyImage from "./greyImage"
import FaIcon from "../components/faIcon"
import animations from "../animations"

const imgWrapper = css({
  maxHeight: `100vh`,
  overflow: `hidden`,
  position: "relative",
  maskImage: `rgba(0, 45, 55, 1.0)`,
})

const logoStyle = css({
  position: `absolute`,
  textAlign: `center`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  width: "65vw",
})

const bottomCenter = css({
  position: "absolute",
  bottom: "0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "@media(max-width: 1000px)": {
    display: "none",
  },
})

const callToAction = css({
  position: "absolute",
  bottom: "100px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "@media(max-width: 1000px)": {
    bottom: "0",
  },
  "@media(max-width: 425px)": {
    display: "none",
  },
})

const iconStyle = css({
  animation: `${animations.bounce} 2s`,
  color: "white",
  animationIterationCount: "infinite",
})

const Splash = props => {
  return (
    <div {...imgWrapper}>
      <GreyImage
        src={props.src}
        fluid={props.fluid}
        fixed={props.fixed}
        alt={props.alt}
      />
      <div {...logoStyle}>
        <img
          src={props.logo.fluid.src}
          alt="Door with text below: The Unfound Door"
        />
      </div>
      <div {...callToAction}>
      </div>
      <div {...bottomCenter}>
        <FaIcon iconName="angle-down" size="fa-4x" style={iconStyle} />
      </div>
    </div>
  )
}
Splash.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
}

export default Splash
