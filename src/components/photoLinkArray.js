import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import PhotoLink from './photoLink'

const PhotoLinkArray = props => {
    return (
        <div {...props.arrayStyle}>
            { props.images.map(( image, key ) => {
                return (
                    <div key={key} {...props.photoStyle}>
                        <PhotoLink src={image.src} sizes={image.sizes} text={image.text} subText={image.subText} to={image.to} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default PhotoLinkArray
