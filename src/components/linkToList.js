import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const listElement = css({
  marginRight: `1rem`,
  '& a': {
    textDecoration: `none`,
    color: StyleStandards.colors.red
  } 
})

const LinkToList = (props) =>
  <li {...listElement}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


export default LinkToList

