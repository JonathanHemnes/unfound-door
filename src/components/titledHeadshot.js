import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import Img from 'gatsby-image'

const container = css({
    width: '20vw',
    minWidth: '250px'
})

const imageStyles = css({
})

const title = css({
    textAlign: `center`,
    textTransform: 'uppercase'
})

const noMargin = css({
    marginBottom: '5px'
})

const TitledHeadshot = props => (
    <div {...container}>
        <div {...imageStyles}>
            <Img sizes={props.sizes} />
        </div>
        <div {...title}>
            <h5 {...noMargin}>{props.name}<br />{props.title}</h5>
        </div>
    </div>
)

TitledHeadshot.PropTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default TitledHeadshot

