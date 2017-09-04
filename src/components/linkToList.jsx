import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import './linkToList.scss'

const LinkToList = ( props ) => 
    <li>
        <Link to={props.to}>
          {props.children}
        </Link>
      </li>


export default LinkToList

