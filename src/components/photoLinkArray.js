import React from 'react'
import { css } from 'glamor'
import propTypes from 'prop-types'
import PhotoLink from './photoLink'

const PhotoLinkArray = props => {
    return (
        <div {...props.arrayStyle}>
            { props.images.map(( image, key ) => {
                return (
                    <div key={key}>
                        <PhotoLink src={image.src} fluid={image.sizes} text={image.text} subText={image.subText} to={image.to} imgStyle={props.photoStyle} textStyle={props.textStyle}/>
                    </div>
                )
            })
            }
        </div>
    )
}

export default PhotoLinkArray
