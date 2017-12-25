import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import expertiseLogo from '../img/header/expertise.jpg'
import StrategicPartnership from '../components/strategicPartnership'
import MainServices from '../components/mainServices'
import ImportantClients from '../components/importantClients'
import AboutHeader from '../components/aboutHeader'

const center = css({
  textAlign: 'center'
})

const uppercase = css({
    textTransform: 'uppercase'
})

const Expertise = ({props, data}) => (
    <div>
        <Splash sizes={data.file.childImageSharp.sizes} logo={data.logo.childImageSharp}/>
        <div> 
            <AboutHeader />
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
