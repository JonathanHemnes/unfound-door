import React from 'react'
import PropTypes from 'prop-types'

const FaIcon = props => (
    <a href={props.link} target={'_blank'} {...props.style}>
        <i className={`fa ${props.size} fa-${props.iconName}`} aria-hidden="true"></i>
    </a>
)

FaIcon.PropTypes = {
    size: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default FaIcon
