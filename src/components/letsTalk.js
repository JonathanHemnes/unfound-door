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


const LetsTalk = ( props ) => { 
    const letsTalk = css({
        ...StyleStandards.animations.yellowHoverBackground,
        textDecoration: `none`,
        padding: `15px 30px 15px 30px`,
        border: `2px solid ${props.borderColor ? props.borderColor : StyleStandards.colors.black}`,
        color: props.textColor ? props.textColor : StyleStandards.colors.black,
        textTransform: 'uppercase',
        fontSize: '1rem',
    })
    
    return (
        <div {...callToAction}>
            <a href={`mailto:${props.email}`} target="_blank" {...letsTalk}>Let's Talk</a>
        </div>
    )
}

export default LetsTalk
