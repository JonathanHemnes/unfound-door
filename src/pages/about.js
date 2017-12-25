import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/OurStoryHeader-TheUnfoundDoor.jpg'
import Founder from '../components/founder'
import OurTeam from '../components/ourTeam'
import AboutHeader from '../components/aboutHeader'
import StrategicPartnership from '../components/strategicPartnership'

const subTextStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const About = ({ data }) => (
    <div>
        <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} textStyle={subTextStyle} subText="Our Story" />
        <div>
            <AboutHeader />
            <Founder img={data.founderHeadshot.childImageSharp} />
            <OurTeam teamHeadshots={data.teamHeadshots} />
            <StrategicPartnership img={data.strategicPartnership.childImageSharp} partnerLogos={data.partnerLogos} />
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
  founderHeadshot: file(relativePath: {eq: "img/Ely_Hemnes_CEO_Founder_Headshot.jpeg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  strategicPartnership: file(relativePath: {eq: "img/Strategic_Partnership.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  partnerLogos:  allFile(filter: {relativeDirectory: {eq: "img/Partner_Logos"}, extension: {regex: "/jpg|png/"}}){
    edges {
        node {
            childImageSharp {
               sizes (maxWidth: 2400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
      }
  } 
  teamHeadshots: allFile(filter: {relativeDirectory: {eq: "img/Team_Headshots"}, extension:{regex: "/jpg|png/"}}){
    edges {
        node {
            name
            childImageSharp {
               sizes (maxWidth: 2400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
      }
  }
} 
`
