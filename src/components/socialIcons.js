import React from 'react'
import { css } from 'glamor'

const iconContainer = css({
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `space-between`
})

const SocialIcons = () => (
    <div {...iconContainer}>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
        <i className={"fa fa-3x fa-facebook-official"} aria-hidden="true"></i>
    </div>
)

export default SocialIcons