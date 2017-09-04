import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const imgWrapper = css({
    width: `100vw`,
    maxHeight: `100vh`,
    overflow: `hidden`
})

const imgStyle = css({
    width: `100%`,
})

const Splash = props => (
    <div {...imgWrapper}>
        <img src={props.src} alt={props.alt} {...imgStyle}/>
    </div>
)

Splash.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Splash