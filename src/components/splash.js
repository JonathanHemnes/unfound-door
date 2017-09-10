import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'
import logo from '../img/TUD_logo_white.png'

const imgWrapper = css({
    width: `100vw`,
    maxHeight: `100vh`,
    overflow: `hidden`,
    position: 'relative',
})

const imgStyle = css({
    width: `100%`
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
        <img src={props.src} alt={props.alt} {...imgStyle} />
        <div {...logoStyle}>
            <img src={logo} />
        </div>
    </div>
)

Splash.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Splash