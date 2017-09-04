import React from 'react'
import LinkToList from '../components/linkToList'
import { css } from 'glamor'

const headerLinks = css({
  position: `fixed`,
  right: 0,
  marginTop: 0,
  display: `flex`,
  flexDirection: `row`,
  listStyle: `none`
})

const Header = () => (
  <div>
    <div>
      <ul {...headerLinks}>
        <LinkToList to="/">Home</LinkToList>
        <LinkToList to="/expertise/">Expertise</LinkToList>
        <LinkToList to="/our-story/">Our Story</LinkToList>
        <LinkToList to="/contact/">Contact</LinkToList>
      </ul>
    </div>
  </div>
)

export default Header