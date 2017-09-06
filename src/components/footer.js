import React from 'react'
import { css } from 'glamor'

const footer = css({
    display: `flex`,
    justifyContent: `center`,
    background: `black`,
    color: `white`
})

const name = css({
    padding: `5px`
})

class Footer extends React.Component {
    constructor() {
        super()
        this.state = { year: new Date().getFullYear() }
    }

    render() {
        return (
            <div {...footer}>
                <p {...name}>Carefully Crafted By The Unfound Door {this.state.year}</p>
            </div>
        )
    }
}

export default Footer