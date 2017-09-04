import React from 'react'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import mainSplashLogo from '../img/header/MainPageHeader.jpg'
import WhatWeDo from '../components/whatWeDo'

const IndexPage = () => (
  <div>
    <Splash src={mainSplashLogo} />
    <WhatWeDo />
  </div>
)

export default IndexPage
