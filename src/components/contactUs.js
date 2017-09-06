import React from 'react'
import { css } from 'glamor'
import SocialIcons from './socialIcons'

const headerText = css({
    textTransform: `uppercase`,
    textAlign: `center`
})

const contact = css({
    display: `flex`,
    flexDirection: 'row',
    justifyContent: `center`
})

const address = css({
    width: `400px`
})

const socialIcons = css({
    width: `400px`
})

const contactForm = css({
    width: `400px`
})

const ContactUs = props => (
    <div>
        <div {...headerText}>
            <h4 >Start Your Journey Towards Creative Freedom</h4>
            <h2>Contact Us</h2>
            <h4>We want to help you find the right path with the best creatives, begin the conversation today.</h4>
        </div>
        <div {...contact}>
            <div {...address}>
                <p>address goes here</p>
            </div>
            <div {...socialIcons}>
                <SocialIcons />
            </div>
            <div {...contactForm}>
                <p>contactForm</p>
            </div>
        </div>
    </div>
)

export default ContactUs