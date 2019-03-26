import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/header/MainPageHeader.jpg'
import WhatWeDo from '../components/whatWeDo'
import PhotoLink from '../components/photoLink'
import MainServices from '../components/mainServices'
import CustomerReviews from '../components/customerReviews'
import { graphql } from 'gatsby'

const photoArray = css({
    display: `flex`,
    flexDirection: `row`,
    minHeight: '300px'
})

const imageStyle = css({
    minHeight: '300px',
    overflow: 'hidden'
})

const subTextStyle = css({
    fontSize: '1rem'
})

const textStyle = css({
    fontSize: '2.5rem',
    marginBottom: '0px',
    lineHeight: 1,
    '@media(max-width: 400px)': {
        fontSize: '1rem'
    }
})

const IndexPage = ({ data }) => {
    return (
        <div>
            <Splash fluid={data.file.childImageSharp.fluid} logo={data.logo.childImageSharp} subText={data.site.siteMetadata.mainPageSubText} email={data.site.siteMetadata.mainEmail} alt="Three escalators"/>
            <WhatWeDo email={data.site.siteMetadata.mainEmail} />
            <MainServices />
            <div {...photoArray}>
                <PhotoLink to={'/about'} fluid={data.whoWeArePhoto.childImageSharp.fluid} text={'Who We Are'} subText={'Artists, Innovators, Professionals'} textStyle={textStyle} subTextStyle={subTextStyle} imgStyle={imageStyle} />
            </div>
            <CustomerReviews />
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
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    whoWeArePhoto: file (relativePath: {eq: "img/Main-WhoWeAre-Header.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    logo: file(relativePath: {eq: "img/TUD_Main_Page_Logo.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
    }
  } 
}
`
