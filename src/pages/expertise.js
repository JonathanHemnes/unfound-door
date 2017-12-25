import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import expertiseLogo from '../img/header/expertise.jpg'
import StrategicPartnership from '../components/strategicPartnership'
import MainServices from '../components/mainServices'
import ImportantClients from '../components/importantClients'
import AboutHeader from '../components/aboutHeader'
import WhoWhatWhere from '../components/whoWhatWhere'

const center = css({
  textAlign: 'center'
})

const uppercase = css({
    textTransform: 'uppercase'
})

const who = 'We are a creative consultancy  rm working the best creatives in every industry with services ranging from photography and videography to design and content creation.';
const what = 'We are dedicated to creating the ultimate seamless experience by offering a diversity of creative services with precision, technique, and passion.';
const why = 'We believe that you should have a designated team focused on aiding you throughout the process of crafting and implementing your vision.';
const where = 'Where ever you are we can go!';
const how = 'Schedule a meeting to discuss how you can discover your creative possibilities that best reflect your vision with creatives that will surpass your expectations today.';

const Expertise = ({props, data}) => (
    <div>
        <Splash sizes={data.file.childImageSharp.sizes} logo={data.logo.childImageSharp}/>
        <div> 
            <AboutHeader />
            <WhoWhatWhere who={who} what={what} where={where} why={why} how={how} />
            <MainServices />
            <ImportantClients />
        </div>
        <StrategicPartnership img={data.strategicPartnership.childImageSharp} partnerLogos={data.partnerLogos} />
    </div>
)

export default Expertise

export const query = graphql`
query expertiseQuery {
  file (relativePath: {eq: "img/header/expertise.jpg"}) {
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
}
`
