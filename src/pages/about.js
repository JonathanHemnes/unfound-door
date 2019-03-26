import React from 'react'
import { css } from 'glamor'
import Helmet from 'react-helmet'
import Splash from '../components/splash'
import Founder from '../components/founder'
import AboutHeader from '../components/aboutHeader'
import StrategicPartnership from '../components/strategicPartnership'
import WhoWhatWhere from '../components/whoWhatWhere'
import StyleStandards from '../styleStandards'
import { graphql } from 'gatsby'

const container = css({
    marginBottom: '75px'
})

const header = css({
    backgroundColor: StyleStandards.colors.grey,
    padding: '20px 0 20px 0',
    marginTop: '40px'
})

const noBottomMargin = css({
    marginBottom: '0px'
})

const who = 'We are a creative consultancy firm working the best creatives in every industry with services ranging from photography and videography to design and content creation.';
const what = 'We are dedicated to creating the ultimate seamless experience by offering a diversity of creative services with precision, technique, and passion.';
const why = 'We believe that you should have a designated team focused on aiding you throughout the process of crafting and implementing your vision.';
const where = 'Where ever you are we can go!';
const how = 'Schedule a meeting to discuss how you can discover your creative possibilities that best reflect your vision with creatives that will surpass your expectations today.';

const About = ({ data }) => (
    <div {...container}>
        <Helmet
            meta={[
                { name: 'description', content: who },
            ]}
        ></Helmet>
        <Splash fluid={data.splash.childImageSharp.fluid} logo={data.logo.childImageSharp} subText="Our Story" email={data.site.siteMetadata.mainEmail} alt="People walking through field with sun at their back"/>
        <div>
            <div {...header}>
                <AboutHeader />
                <WhoWhatWhere who={who} what={what} where={where} why={why} how={how} />
            </div>
            <Founder img={data.founderHeadshot.childImageSharp} />
            <StrategicPartnership img={data.strategicPartnership.childImageSharp} partnerLogos={data.partnerLogos} />
        </div>
    </div>
)

export default About

export const query = graphql`
query aboutQuery {
  site {
    siteMetadata {
      title,
      mainEmail,
      mainPageSubText
    }
  },
  splash: file (relativePath: {eq: "img/header/OurStoryHeader.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  logo: file(relativePath: {eq: "img/TUD_Main_Page_Logo.png"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  } 
  founderHeadshot: file(relativePath: {eq: "img/Ely_Hemnes_CEO_Founder_Headshot.jpeg"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  } 
  strategicPartnership: file(relativePath: {eq: "img/Strategic_Partnership.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  } 
  partnerLogos:  allFile(filter: {relativeDirectory: {eq: "img/Partner_Logos"}, extension: {regex: "/jpg|png/"}}){
    edges {
        node {
            childImageSharp {
               fluid (maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
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
               fluid (maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
  }
} 
`
