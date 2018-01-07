import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'
import logo from '../img/TUD_logo_white.png'
import GreyImage from './greyImage'
import Img from 'gatsby-image'
import FaIcon from '../components/faIcon'

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

const subTextStyle = css({
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '200',
    '@media(max-width: 730px)': {
       display: 'none' 
    }
})

const bottomCenter = css({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '@media(max-width: 587px)': {
       display: 'none' 
    }
})

const iconStyle = css({
    color: 'white'
})

const Splash = props => {
    return (
        <div {...imgWrapper}>
            <GreyImage src={props.src} sizes={props.sizes} resolutions={props.resolutions} alt={props.alt} />
            <div {...logoStyle}>
                <img src={props.logo.sizes.src} />
                <h2 {...subTextStyle} {...props.textStyle}>{props.subText}</h2>
            </div>
            <div {...bottomCenter}>
                <FaIcon iconName='angle-down' size='fa-4x' style={iconStyle} />
            </div>
        </div>
)
}
Splash.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Splash
