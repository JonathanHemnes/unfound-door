import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const splashStyle = css({
    width: `100vw`
})

const Splash = props => (
    <div>
        <img src={props.src} {...splashStyle}/>
    </div>
)

Splash.propTypes = {
  src: PropTypes.string.isRequired
}

export default Splash