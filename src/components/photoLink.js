import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import GreyImage from './greyImage'

const container = css({
    position: `relative`
})

const text = css({
    position: `absolute`,
    textAlign: `center`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
})


const PhotoLink = (props) => (
    <div {...container}>
        <Link to={props.to}>
            <GreyImage src={props.src} />
            {props.text && <div {...text}>
                <h3>{props.text}</h3>
                <h4>{props.subText}</h4>
            </div>}
        </Link>
    </div>
)

PhotoLink.propTypes = {
    to: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    subText: PropTypes.string
}

export default PhotoLink

