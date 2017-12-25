import React from 'react'
import { css } from 'glamor'
import StyleStandards from '../styleStandards.js'

const footer = css({
    display: `flex`,
    justifyContent: `center`,
    alignItems: 'center',
    background: StyleStandards.colors.grey,
    color: StyleStandards.colors.black,
})

const name = css({
     paddingTop: `20px`
})

class Footer extends React.Component {
    constructor() {
        super()
        this.state = { year: new Date().getFullYear() }
    }

    render() {
        return (
            <div {...footer}>
                <p {...name}>Carefully Crafted By The<strong>Unfound</strong>Door {this.state.year}</p>
            </div>
        )
    }
}

export default Footer
