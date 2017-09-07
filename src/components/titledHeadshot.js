import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const title = css({
    textAlign: `center`
})

const TitledHeadshot = props => (
    <div>
        <img src={props.src} />
        <div {...title}>
            <h3>{props.name}</h3>
            <h4>{props.title}</h4>
        </div>
    </div>
)

TitledHeadshot.PropTypes = {
    src: PropTypes.object.required,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default TitledHeadshot

