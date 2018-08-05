import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import GreyImage from './greyImage'
import StyleStandards from '../styleStandards.js'


const textBlock = css({
    position: `absolute`,
    textAlign: `center`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
})

const white = css({
    ...StyleStandards.animations.yellowHover,
    color: StyleStandards.colors.white,
    textTransform: 'uppercase'
})


const PhotoLink = (props) => {
    const container = css(Object.assign({
        position: `relative`,
        minWidth: '360px',
        width: '25vw',
        flex: 1
    }, props.containerStyle ))

    return (
        <div {...container}>
            { props.to ?
                <Link to={props.to}>
                    <GreyImage src={props.src} sizes={props.sizes} imgStyle={props.imgStyle} alt={props.alt} />
                    {props.text && <div {...textBlock}>
                        <h2 {...white} {...props.textStyle}>{props.text}</h2>
                        <h3 {...white} {...props.subTextStyle}>{props.subText}</h3>
                    </div>}
                </Link>
                :
                <a href={props.href} target="_blank">
                    <GreyImage src={props.src} sizes={props.sizes} imgStyle={props.imgStyle} />
                    {props.text && <div {...textBlock}>
                        <h2 {...white} {...props.textStyle}>{props.text}</h2>
                        <h3 {...white} {...props.subTextStyle}>{props.subText}</h3>
                    </div>}
                </a>
            }
        </div>
    )
}

PhotoLink.propTypes = {
    to: PropTypes.string,
    src: PropTypes.string,
    text: PropTypes.string,
    subText: PropTypes.string
}

export default PhotoLink

