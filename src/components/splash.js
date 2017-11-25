import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'
import logo from '../img/TUD_logo_white.png'
import GreyImage from './greyImage'

const imgWrapper = css({
    width: `100vw`,
    maxHeight: `100vh`,
    overflow: `hidden`,
    position: 'relative',
    maskImage: `rgba(0, 45, 55, 1.0)`
})

const logoStyle = css({
    position: `absolute`,
    textAlign: `center`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
})

const Splash = props => (
    <div {...imgWrapper}>
        <GreyImage src={props.src} sizes={props.sizes} resolutions={props.resolutions} alt={props.alt} />
        <div {...logoStyle}>
            <img src={logo} />
        </div>
    </div>
)

Splash.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Splash