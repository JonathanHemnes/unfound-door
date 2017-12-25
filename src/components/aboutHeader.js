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
        <p {...center}>THE<strong>UNFOUND</strong>DOOR began as an experiment; can artists provide the level of service, responsibility, and management that clients need and deserve?</p>
    </div>
)

export default AboutHeader
