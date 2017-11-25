import React from 'react'
import {css} from 'glamor'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const imgStyle = css({
    width: `100%`,
    filter: `gray`,
    'WebkitFilter': 'grayscale(0.5)',
    filter: 'grayscale(0.5)',
})

const GreyImage = props => {
    if (props.src) {
        return (<img src={props.src} alt={props.alt} {...imgStyle} />)
    } else if (props.sizes) {
        return (<Img sizes={props.sizes} />)
    } else if (props.resolutions) {
        return (<Img resolutions={props.resolutions}/>)
    }
}

GreyImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default GreyImage