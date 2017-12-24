import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import Img from 'gatsby-image'

const container = css({
    width: '200px'
})

const imageStyles = css({
    height: '200px',
    width: '200px',
    padding: '0 10px 0 10px'
})

const title = css({
    textAlign: `center`
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
            <p {...noMargin}>{props.name}<br />{props.title}</p>
        </div>
    </div>
)

TitledHeadshot.PropTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default TitledHeadshot

