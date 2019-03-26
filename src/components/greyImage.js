import React from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'

const GreyImage = props => {
    if (props.src) {
        return (<img src={props.src} alt={props.alt} {...props.imgStyle} />)
    } else if (props.fluid) {
        return (<Img fluid={props.fluid} className={props.imgStyle} alt={props.alt}/>)
    } else if (props.fixed) {
        return (<Img fixed={props.fixed} className={props.imgStyle} alt={props.alt}/>)
    } else {
        return null
    }
}

GreyImage.propTypes = {
    src: propTypes.string,
    alt: propTypes.string
}

export default GreyImage
