import React from 'react'
import propTypes from 'prop-types'
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
            <Img fluid={props.fluid} />
        </div>
        <div {...title}>
            <h5 {...noMargin}>{props.name}<br />{props.title}</h5>
        </div>
    </div>
)

TitledHeadshot.propTypes = {
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}

export default TitledHeadshot

