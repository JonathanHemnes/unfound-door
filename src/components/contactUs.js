import React from 'react'
import { css } from 'glamor'
import SocialIcons from './socialIcons'
import Address from './address'
import FaIcon from './faIcon.js'
import StyleStandards from '../styleStandards.js'


const headerText = css({
    textAlign: `center`,
    backgroundColor: StyleStandards.colors.grey,
    paddingTop: '15px'
})

const uppercase = css({
    textTransform: 'uppercase'
})

const center = css({
    margin: 'auto'
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
    backgroundColor: StyleStandards.colors.black,
    color: StyleStandards.colors.white,
    textAlign: 'center',
    height: '30px',
    fontSize: '30px',
    padding: '10px  0 40px 0'
})

const contactBody = css({
    backgroundColor: StyleStandards.colors.grey,
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
           <h1 {...uppercase}>Be Found</h1> 
           <p {...noMargin}>Start Your Journey Towards Creative Freedom</p>
       </div> 
       <div {...contactSection}>
           <div {...contact}>
               <div {...contactHeader}>
                   <p>Find Us</p> 
               </div>
               <div {...contactBody}>
                   <Address />
               </div>     
           </div>
           <div {...contact}>
               <div {...contactHeader}>
                   <p>Drop a line</p> 
               </div>
               <div {...contactBody}>
                   <div {...mainContactIcons}>
                       <FaIcon link="mailto:ely@theunfounddoor.com" iconName="envelope" size="fa-5x" style={mainContactIconStyle} />
                       <FaIcon link="tel:6177759911" iconName="phone" size="fa-5x" style={mainContactIconStyle} />
                   </div>
               </div>     
           </div>
           <div {...contact}>
               <div {...contactHeader}>
                   <p>Connect</p> 
               </div>
               <div {...contactBody}>
                   <SocialIcons />
               </div>     
           </div>
       </div>
    </div>
)

export default ContactUs
