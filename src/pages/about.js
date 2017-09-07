import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/OurStoryHeader-TheUnfoundDoor.jpg'
import Founder from '../components/founder'


const title = css({
  textTransform: `uppercase`,
  textAlign: `center`
})

const center = css({
  textAlign: `center`
})

const About = ({ data }) => (
  <div>
    <Splash src={mainSplashLogo} />
    <div>
      <h2 {...title}>About Us</h2>
      <p {...center}>Started by Ely Hemnes, realized their was a sinlge source focused on detail and service for companies and individuals to access amazing creatives....</p>
      <Founder />
    </div>
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