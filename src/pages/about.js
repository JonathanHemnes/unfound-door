import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/OurStoryHeader-TheUnfoundDoor.jpg'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'


const About = ({ data }) => (
    <div>
        <Splash src={mainSplashLogo} />
    </div>
)

export default About

export const query = graphql`
  query emailQuery {
    site {
      siteMetadata {
        title,
        mainEmail
      }
    }
  } 
`