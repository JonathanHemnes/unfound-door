import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const listElement = css({
    marginRight: `1rem`,
    '& a': {
        textDecoration: `none`,
        color: StyleStandards.colors.white,
        fontSize: `26px`,
        '@media(max-width: 500px)': {
            fontSize: '18px'
        }
    } 
})

const LinkToList = (props) =>(
    <li {...listElement}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
)

export default LinkToList

