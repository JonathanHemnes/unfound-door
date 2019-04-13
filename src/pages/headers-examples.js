import React from "react"
import { css } from "glamor"

const smallParagraph = css({
  fontSize: "16px",
})

const Header = () => (
  <div>
    <h1>This is An H1.</h1>
    <h2>This is An H2.</h2>
    <h3>This is An H3.</h3>
    <h4>This is An H4.</h4>
    <h5>This is An H5.</h5>
    <p>This is a paragraph</p>
    <p {...smallParagraph}>This is a small paragraph</p>
  </div>
)

export default Header
