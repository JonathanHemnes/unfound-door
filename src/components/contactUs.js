import React from 'react'
import { css } from 'glamor'
import SocialIcons from './socialIcons'
import Address from './address'

const headerText = css({
    textTransform: `uppercase`,
    textAlign: `center`
})

const contact = css({
    display: `flex`,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: `center`,
    backgroundColor: `gray`,
    padding: '25px 0 25px 0'
})

const address = css({
    minWidth: '250px',
    flex: 1
})

const socialIcons = css({
    minWidth: '250px',
    flex: 1
})

const padding = css({
    paddingLeft: `5%`,
    paddingRight: `5%`,
    '@media(max-width: 500px)': {
        paddingBottom: '5%'
    }
})

const contactForm = css({
    minWidth: '250px',
    flex: 1
})

const center = css({
    margin: 'auto'
})

const ContactUs = props => (
    <div>
        <div {...headerText}>
            <h4>Start Your Journey Towards Creative Freedom</h4>
            <h1>Contact Us</h1>
            <h4>We want to help you find the right path with the best creatives, begin the conversation today.</h4>
        </div>
        <div {...contact}>
            <div {...address} {...padding}>
                <Address />
            </div>
            <div {...socialIcons} {...padding} {...center}>
                <SocialIcons />
            </div>
            <div {...contactForm} {...padding}>
            </div>
        </div>
    </div>
)

export default ContactUs
