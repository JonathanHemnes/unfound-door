import React from 'react'
import {css} from 'glamor'
import PropTypes from 'prop-types'

const imgStyle = css({
    width: `100%`,
    filter: `gray`,
    'WebkitFilter': 'grayscale(0.5)',
    filter: 'grayscale(0.5)',
})

const GreyImage = props => (
    <img src={props.src} alt={props.alt} {...imgStyle} />
)

GreyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default GreyImage