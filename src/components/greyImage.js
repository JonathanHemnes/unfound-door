import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const imgStyle = css({
    'WebkitFilter': 'grayscale(0.5)',
    filter: 'grayscale(0.5)',
})

const GreyImage = props => {
    if (props.src) {
        return (<img src={props.src} alt={props.alt} {...imgStyle} />)
    } else if (props.sizes) {
        return (<Img sizes={props.sizes} className={imgStyle} />)
    } else if (props.resolutions) {
        return (<Img resolutions={props.resolutions} className={imgStyle} />)
    }
}

GreyImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default GreyImage
