import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const GreyImage = props => {
    if (props.src) {
        return (<img src={props.src} alt={props.alt} {...props.imgStyle} />)
    } else if (props.sizes) {
        return (<Img sizes={props.sizes} className={props.imgStyle} alt={props.alt}/>)
    } else if (props.resolutions) {
        return (<Img resolutions={props.resolutions} className={props.imgStyle} alt={props.alt}/>)
    }
}

GreyImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default GreyImage
