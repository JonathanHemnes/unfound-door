import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/header/MainPageHeader.jpg'
import headerPhoto from '../img/PhotographyHeader2-TheUnfoundDoor.jpg'
import WhatWeDo from '../components/whatWeDo'
import PhotoLink from '../components/photolink'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'

const photoArray = css({
  display: `flex`,
  flexDirection: `row`
})

const IndexPage = ({ data }) => (
  <div>
    <Splash src={mainSplashLogo} />
    <WhatWeDo email={data.site.siteMetadata.mainEmail} />
    <div {...photoArray}>
      <PhotoLink to={'/'} src={headerPhoto} text={'Photography'} />
      <PhotoLink to={'/'} src={headerPhoto}  text={'Videography'} />
      <PhotoLink to={'/'} src={headerPhoto}  text={'Design & Strategy'} />
    </div>
    <div {...photoArray}>
      <PhotoLink to={'/'} src={headerPhoto} text={'Who We Are'} subText={'Artists, Innovators, Professionals'} />
    </div>
    <ContactUs />
    <Footer />
  </div>
)

export default IndexPage

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
