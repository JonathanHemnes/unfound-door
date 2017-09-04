import React from 'react'
import LinkToList from '../components/linkToList'

const Header = () => (
    <div>
      <div>
        <ul style={{ position: "fixed", right: 0, marginTop: 0}}>
          <LinkToList to="/">Home</LinkToList>
          <LinkToList to="/page-2/">Expertise</LinkToList>
          <LinkToList to="/page-2/">Our Story</LinkToList>
          <LinkToList to="/page-2/">Contact</LinkToList>
          </ul>
      </div>
    </div>
  )

  export default Header