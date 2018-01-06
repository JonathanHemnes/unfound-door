import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Splash from '../components/splash'
import mainSplashLogo from '../img/header/MainPageHeader.jpg'
import WhatWeDo from '../components/whatWeDo'
import PhotoLink from '../components/photoLink'
import MainServices from '../components/mainServices'
import CustomerReviews from '../components/customerReviews'

const photoArray = css({
    display: `flex`,
    flexDirection: `row`,
    minHeight: '300px'
})

const imageStyle = css({
    minHeight: '300px',
    overflow: 'hidden'
})

const reviews = [{
    text: 'GE Johnson engaged The Unfound Door to help us cel- ebrate our 50th Anniversary and capture the momentous occasion. Our photographer was extremely easy to work with, professional, understood our mission, and captured our celebration perfectly. We will no doubt use their services again. They did not disappoint, in fact, they delivered much more than we could have ever anticipated.',
    source: 'Michelle K., GE Johnson'
},{
    text: 'I engaged The Unfound Door to shoot both my professional head-shots and stock imagery for the re-design of my web- site. They went out of their way to make sure we captured all the different types of shots we had originally discussed and displayed their creativity in suggesting various angles and backgrounds for photos. They were great to work with and I appreciated their level of professionalism and positivity.',
    source: 'Julie W., Business Rewritten'
}, {
    text: 'Ely and her team are great to work with! We have used them a few times to shoot various construction projects and have received quality images with quick turn-around. Ely and her team take care to make sure we get the shots that not only help us but also our clients!',
    source: 'Jessica N., Pinkard Construction'
}, {
    text: 'They are so amazing to work with! Totally made me feel like a movie star for a morning, and the head shots turned out amazing.',
    source: 'Conor R.'
}]

const IndexPage = ({ data }) => {
    return (
        <div>
            <Splash sizes={data.file.childImageSharp.sizes} logo={data.logo.childImageSharp} subText={data.site.siteMetadata.mainPageSubText} />
            <WhatWeDo email={data.site.siteMetadata.mainEmail} />
            <MainServices />
            <div {...photoArray}>
                <PhotoLink to={'/about'} sizes={data.whoWeArePhoto.childImageSharp.sizes} text={'Who We Are'} subText={'Artists, Innovators, Professionals'} imgStyle={imageStyle} />
            </div>
            <CustomerReviews reviews={reviews} />
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
    whoWeArePhoto: file (relativePath: {eq: "img/Main-WhoWeAre-Header.jpg"}) {
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
