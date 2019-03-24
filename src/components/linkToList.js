import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const listElement = css({
    marginRight: `5%`,
    '& a': {
        ...StyleStandards.animations.yellowHover,
        textDecoration: `none`,
        color: StyleStandards.colors.white,
        fontSize: `26px`,
        '@media(max-width: 600px)': {
            fontSize: '16px'
        },
    }
})

const LinkToList = (props) =>(
    <li {...listElement}>
        <Link to={`${ props.to }`}>
            {props.children}
        </Link>
    </li>
)

export default LinkToList

