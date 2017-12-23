import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import expertiseLogo from '../img/header/expertise.jpg'
import StrategicPartnership from '../components/strategicPartnership'
import MainServices from '../components/mainServices'
import ImportantClients from '../components/importantClients'

const center = css({
  textAlign: 'center'
})

const Expertise = ({props, data}) => (
  <div>
    <Splash sizes={data.file.childImageSharp.sizes} logo={data.logo.childImageSharp}/>
    <div> 
      <h2 {...center}>Our Expertise</h2>
      <MainServices />
      <ImportantClients />
    </div>
    <StrategicPartnership />
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
}
`
