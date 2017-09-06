import React from 'react'
import LinkToList from '../components/linkToList'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const headerStyle = css({
  width: `100vw`,
  height: `30px`,
  position: `fixed`
})

const headerLinks = css({
  margin: 0,
  paddingTop: `5px`,
  display: `flex`,
  flexDirection: `row`,
  listStyle: `none`,
  justifyContent: `flex-end`,
  alignItems: `center`
})

const Header = () => (
  <div {...headerStyle}>
    <ul {...headerLinks}>
      <LinkToList to="/">Home</LinkToList>
      <LinkToList to="/expertise/">Expertise</LinkToList>
      <LinkToList to="/about/">Our Story</LinkToList>
      <LinkToList to="/contact/">Contact</LinkToList>
    </ul>
  </div>
)

export default Header