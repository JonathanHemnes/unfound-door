import React from 'react'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import mainSplashLogo from '../../img/header/MainPageHeader.jpg'

const IndexPage = () => (
  <div>
    <Splash src={mainSplashLogo} />
    <div>
      this is the index page
  </div>
  </div>
)

export default IndexPage
