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
        <div {...photoText}>
            <h5 {...props.textStyle}>{props.text}</h5>
            <p>{props.subText}</p>
        </div>
    </div>
)

PhotoWithTextOverlay.PropTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
    subText: PropTypes.string,
    subTextStyle: PropTypes.object
}

export default PhotoWithTextOverlay