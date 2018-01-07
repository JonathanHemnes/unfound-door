import React from 'react'
import { css } from 'glamor'

const title = css({
    textTransform: `uppercase`,
    textAlign: `center`,
    margin: '25px 0 0 0'
})

const center = css({
    textAlign: `center`,
    marginLeft: '15%',
    marginRight: '15%'
})

const AboutHeader = () => (
    <div>
        <h1 {...title}>About Us</h1>
        <p {...center}>Creativity and efficiency is the name of our game. We believe in helping you find the right path towards creative freedom.</p>
    </div>
)

export default AboutHeader
