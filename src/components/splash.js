import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'
import logo from '../img/TUD_logo_white.png'
import GreyImage from './greyImage'
import Img from 'gatsby-image'

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
    width: '65vw'
})

const Splash = props => {
    console.log(props)
    return (
    <div {...imgWrapper}>
        <GreyImage src={props.src} sizes={props.sizes} resolutions={props.resolutions} alt={props.alt} />
        <div {...logoStyle}>
            <Img sizes={props.logo.sizes} />
        </div>
    </div>
)
}
Splash.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Splash
