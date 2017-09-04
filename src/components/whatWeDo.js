import React from 'react'
import { css } from 'glamor'

const header = css({
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`
})

const headerText = css({
    textTransform: `uppercase`
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
    justifyContent: `center`
})

const WhatWeDo = () => (
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
            <button>Lets Talk</button>
        </div>
    </div>
)

export default WhatWeDo