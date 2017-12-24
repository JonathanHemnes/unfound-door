import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/OurStoryHeader-TheUnfoundDoor.jpg'
import Founder from '../components/founder'
import OurTeam from '../components/ourTeam'
import StrategicPartnership from '../components/strategicPartnership'


const title = css({
  textTransform: `uppercase`,
  textAlign: `center`
})

const center = css({
  textAlign: `center`
})

const About = ({ data }) => (
  <div>
    <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} />
    <div>
      <h1 {...title}>About Us</h1>
      <p {...center}>Started by Ely Hemnes, realized their was a sinlge source focused on detail and service for companies and individuals to access amazing creatives....</p>
      <Founder />
      <OurTeam />
      <StrategicPartnership />
    </div>
  </div>
)

export default About

export const query = graphql`
query aboutQuery {
  splash: file (relativePath: {eq: "img/OurStoryHeader-TheUnfoundDoor.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  logo: file(relativePath: {eq: "img/TUD_Main_Page_Logo.png"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
} 
`
