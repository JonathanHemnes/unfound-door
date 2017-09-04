import React from 'react'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import mainSplashLogo from '../img/header/MainPageHeader.jpg'
import WhatWeDo from '../components/whatWeDo'

const IndexPage = ({ data }) =>(
    <div>
      <Splash src={mainSplashLogo} />
      <WhatWeDo email={data.site.siteMetadata.mainEmail} />
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
