import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import GreyImage from './greyImage'

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
    transform: `translate(-50%, -50%)`,
    color: 'white',
    textTransform: 'uppercase'
})

const PhotoWithTextOverlay = props => (
    <div {...photoWithText}>
        <GreyImage src={props.src} sizes={props.sizes} />
        <div {...photoText}>
            <p {...props.textStyle}>{props.text}</p>
            <p>{props.subText}</p>
        </div>
    </div>
)

PhotoWithTextOverlay.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
    subText: PropTypes.string,
    subTextStyle: PropTypes.object
}

export default PhotoWithTextOverlay
