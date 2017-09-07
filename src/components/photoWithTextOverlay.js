import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'

const photoWithText = css({
    width: `100%`,
    height: `100%`,
    position: 'relative'
})

const photoText = css({
    position: `absolute`,
    textAlign: `center`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
})

const PhotoWithTextOverlay = props => (
    <div {...photoWithText}>
        <img src={props.src} />
        <p {...photoText} {...props.textStyle}>{props.text}</p>
    </div>
)

PhotoWithTextOverlay.PropTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object
}

export default PhotoWithTextOverlay