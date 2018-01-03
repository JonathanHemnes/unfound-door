import React from 'react'
import { css } from 'glamor'
import Gallery from 'react-photo-gallery'

const header = css({
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '30px 0 30px 0'
})

const stripe = css({
    height: '35px',
    backgroundColor: 'black'
})

const PhotoGallery = props => {
    const PHOTO_SET = props.photos
        .filter(edge => edge.node.childImageSharp && edge.node.childImageSharp.resolutions)
        .map(edge => {
            const photo = edge.node.childImageSharp.resolutions
            return {
                src: photo.src,
                srcSet: photo.srcSet.split(','),
                height: photo.height,
                width: photo.width
            }
        })
    return (
        <div>
            <div {...stripe}></div>
            <div {...header}>
                <h1>{props.title}</h1>
            </div> 
            <Gallery photos={PHOTO_SET} />
        </div>
    )
} 

export default PhotoGallery
