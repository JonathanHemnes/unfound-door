import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import GreyImage from './greyImage'

const container = css({
    position: `relative`,
    minWidth: '360px',
    flex: 1
})

const textBlock = css({
    position: `absolute`,
    textAlign: `center`,
    top: `35%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
})

const white = css({
    color: 'white'
})


const PhotoLink = (props) => (
    <div {...container}>
        <Link to={props.to}>
            <GreyImage src={props.src} />
            {props.text && <div {...textBlock}>
                <h2 {...white}>{props.text}</h2>
                <h3 {...white}>{props.subText}</h3>
            </div>}
        </Link>
    </div>
)

PhotoLink.propTypes = {
    to: PropTypes.string,
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    subText: PropTypes.string
}

export default PhotoLink

