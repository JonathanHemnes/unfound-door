import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/header/MainPageHeader.jpg'
import WhatWeDo from '../components/whatWeDo'
import PhotoLink from '../components/photoLink'
import MainServices from '../components/mainServices'
import WhoWeArePhoto from '../img/Main-WhoWeAre-Header.jpg'

const photoArray = css({
    display: `flex`,
    flexDirection: `row`
})

const IndexPage = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Splash sizes={data.file.childImageSharp.sizes} logo={data.logo.childImageSharp} subText={data.site.siteMetadata.mainPageSubText} />
            <WhatWeDo email={data.site.siteMetadata.mainEmail} />
            <MainServices />
            <div {...photoArray}>
                <PhotoLink to={'/about'} src={WhoWeArePhoto} text={'Who We Are'} subText={'Artists, Innovators, Professionals'} />
            </div>
        </div>
    )}

export default IndexPage

export const query = graphql`
  query emailQuery {
    site {
      siteMetadata {
        title,
        mainEmail,
        mainPageSubText
      }
    },
    file (relativePath: {eq: "img/header/MainPageHeader.jpg"}) {
      childImageSharp {
        sizes (maxWidth: 2400) {
          ...GatsbyImageSharpSizes
        }
      }
    },
    logo: file(relativePath: {eq: "img/TUD_Main_Page_Logo.png"}) {
      childImageSharp {
        sizes (maxWidth: 2400) {
          ...GatsbyImageSharpSizes
        }
    }
  } 
}
`
