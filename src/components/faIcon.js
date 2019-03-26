import React from 'react'
import propTypes from 'prop-types'
import { css } from 'glamor'
import animations from '../animations'

const hoverBounce = css({
    ':hover': {
        animation: `${animations.grow} 1s`
    }
})

const FaIcon = props => (
    <a href={props.link} target={'_blank'} rel="noopener" id={props.name} {...props.style}>
        <i className={`fa ${props.size} fa-${props.iconName}`} {...hoverBounce} aria-hidden="true"></i>
    </a>
)

FaIcon.propTypes = {
    size: propTypes.string,
    iconName: propTypes.string.isRequired,
    link: propTypes.string
}

export default FaIcon
