import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import animations from '../animations'

const hoverBounce = css({
    ':hover': {
        animation: `${animations.grow} 1s`,
    }
})

const FaIcon = props => (
    <a href={props.link} target={'_blank'} {...props.style}>
        <i className={`fa ${props.size} fa-${props.iconName}`} {...hoverBounce} aria-hidden="true"></i>
    </a>
)

FaIcon.PropTypes = {
    size: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default FaIcon
