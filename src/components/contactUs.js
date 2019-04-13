import React from 'react'
import { css } from 'glamor'
import SocialIcons from './socialIcons'
import Address from './address'
import FaIcon from './faIcon.js'
import StyleStandards from '../styleStandards.js'


const headerText = css({
    textAlign: `center`,
    backgroundColor: StyleStandards.colors.yellow,
    paddingTop: '15px'
})

const noBottomMargin = css({
    marginBottom: '0.2rem'
})

const uppercase = css({
    textTransform: 'uppercase'
})

const contactSection = css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
})

const contact = css({
    flex: 1,
    minWidth: '300px'
})

const noMargin = css({
    margin: 0,
    paddingBottom: `1.45rem`
})

const contactHeader = css({
    backgroundColor: StyleStandards.colors.white,
    color: StyleStandards.colors.black,
    textAlign: 'center',
    height: '40px',
    textTransform: 'uppercase',
    padding: '10px  0 40px 0',
    marginBottom: '4px'
})

const contactBody = css({
    backgroundColor: StyleStandards.colors.yellow,
    height: '150px'
})

const mainContactIcons = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px'
})

const mainContactIconStyle = css({
    margin: '10px'
})

const ContactUs = props => (
    <div id="contact">
        <div {...headerText}>
           <h1 {...uppercase} {...noBottomMargin}>Be Found</h1> 
           <p {...noMargin}>Start Your Journey Towards Creative Freedom</p>
       </div> 
       <div {...contactSection}>
           <div {...contact}>
               <div {...contactHeader}>
                   <h3>Find Us</h3> 
               </div>
               <div {...contactBody}>
                   <Address />
               </div>     
           </div>
           <div {...contact}>
               <div {...contactHeader}>
                   <h3>Drop a line</h3> 
               </div>
               <div {...contactBody}>
                   <div {...mainContactIcons}>
                       <FaIcon link="mailto:ely@theunfounddoor.com" iconName="envelope" name="email" size="fa-5x" style={mainContactIconStyle} />
                       <FaIcon link="tel:6177759911" iconName="phone" size="fa-5x" name="telephone" style={mainContactIconStyle} />
                   </div>
               </div>     
           </div>
           <div {...contact}>
               <div {...contactHeader}>
                   <h3>Connect</h3> 
               </div>
               <div {...contactBody}>
                   <SocialIcons />
               </div>     
           </div>
       </div>
    </div>
)

export default ContactUs
