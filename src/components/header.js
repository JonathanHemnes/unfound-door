import React from "react"
import LinkToList from "../components/linkToList"
import { css } from "glamor"

const headerStyle = css({
  width: `100vw`,
  height: `30px`,
  position: `fixed`,
  zIndex: 400,
})

const headerLinks = css({
  margin: 0,
  paddingTop: `10px`,
  display: `flex`,
  flexDirection: `row`,
  listStyle: `none`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  textTransform: "uppercase",
})

const Header = () => (
  <div {...headerStyle}>
    <ul {...headerLinks}>
      <LinkToList to="/">Home</LinkToList>
      <LinkToList to="/expertise/">Expertise</LinkToList>
      <LinkToList to="/about/">Our Story</LinkToList>
      <LinkToList to="/contact">Contact</LinkToList>
    </ul>
  </div>
)

export default Header
