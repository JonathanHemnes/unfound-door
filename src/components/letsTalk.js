import React from 'react'
import { css } from 'glamor'
import StyleStandards from '../styleStandards.js'

const callToAction = css({
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingBottom: '25px'
})

const letsTalk = css({
    ...StyleStandards.animations.yellowHoverBackground,
    textDecoration: `none`,
    padding: `15px 30px 15px 30px`,
    border: `2px solid black`,
    color: StyleStandards.colors.black,
    textTransform: 'uppercase',
    fontSize: '1rem',
})

const LetsTalk = props => (
        <div {...callToAction}>
            <a href={`mailto:${props.email}`} target="_blank" {...letsTalk}>Let's Talk</a>
        </div>
)

export default LetsTalk
