import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const header = css({
    paddingTop: '25px',
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`
})

const headerText = css({
    textTransform: `uppercase`,
    textAlign: 'center'
})

const subText = css({
    marginLeft: `5%`,
    marginRight: `5%`,
    textOverflow: 'wrap',
    textAlign: `center`
})

const callToAction = css({
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingBottom: '25px'
})

const letsTalk = css({
    textDecoration: `none`,
    padding: `15px 30px 15px 30px`,
    border: `2px solid black`,
    color: `black`
})

const WhatWeDo = ( props ) => (
    <div>
        <div {...header}>
            <h4 {...headerText}>Collaborate with the best, elevate your visuals</h4>
            <h1 {...headerText}>What We Do</h1>
        </div>
        <div {...subText}>
            <p>
                The Unfound Door is a creative consultancy firm specializing in photography, videography, web and graphic design, and creative vision strategy.
                The firm focuses on bringing customized and comprehensive imagery and branding to small businesses, A/E/C companies, and individuals. We are dedicated to creating
                the ultimate stress-free experience by offering a diversity of creative services with attention, passion, and technique.
            </p>
        </div>
        <div {...callToAction}>
            <a href={`mailto:${props.email}`} target="_blank" {...letsTalk}>Let's Talk</a>
        </div>
    </div>
)

WhatWeDo.PropTypes = {
    email: PropTypes.string.isRequired
}

export default WhatWeDo
