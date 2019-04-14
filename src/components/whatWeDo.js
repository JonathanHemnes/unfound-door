import React from "react"
import { css } from "glamor"
import propTypes from "prop-types"
import LetsTalk from "./LetsTalk"

const container = css({
  padding: "75px 0 75px 0",
})

const header = css({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
})

const headerText = css({
  textTransform: `uppercase`,
  textAlign: "center",
})

const subText = css({
  marginLeft: `4%`,
  marginRight: `4%`,
  textOverflow: "wrap",
  textAlign: `center`,
})

const emphasis = css({
  textTransform: "uppercase",
})

const WhatWeDo = props => (
  <div {...container}>
    <div {...header}>
      <h4 {...headerText}>
        Collaborate with the best, elevate your creative marketing assets
      </h4>
      <h1 {...headerText}>What We Do</h1>
    </div>
    <div {...subText}>
      <p>
        The Unfound Door is a creative consultancy firm designed to help you
        discover the best artistic services that advance your marketing. From
        photography and videography to graphic and web design, our focus is to
        bring customized, comprehensive visuals and branding to small
        businesses, specialized industries, and individuals. We are dedicated to
        creating the ultimate seamless experience by offering a diversity of
        creative services with precision, technique, and passion.
      </p>
      <h4 {...emphasis}>
        {" "}
        DISCOVER WHAT HAPPENS WHEN CREATIVITY MEETS EFFICIENCY
      </h4>
    </div>
    <LetsTalk email={props.email} />
  </div>
)

WhatWeDo.propTypes = {
  email: propTypes.string.isRequired,
}

export default WhatWeDo
