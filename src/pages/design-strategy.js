import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import PhotoLinkArray from '../components/photoLinkArray'
import PhotoLink from '../components/photoLink'
import PartnerLogos from '../components/partnerLogos.js'
import WhoWhatWhere from '../components/whoWhatWhere'
import StyleStandards from '../styleStandards'

const subTextStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const arrayStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
})

const photoStyle = css({
    flex:1,
    overflow: 'hidden'
})

const center = css({
    textAlign: 'center',
    marginLeft: '15%',
    marginRight: '15%',
    marginTop: '20px'

})

const uppercase = css({
    textTransform: 'uppercase'
})

const marginBottom = css({
    marginBottom: '20px'
})

const greyBackground = css({
    backgroundColor: StyleStandards.colors.grey,
    textAlign: 'center',
    paddingTop: '20px'
})

const largeContainerPhoto = {
    width: `100vw`,
    marginTop: '35px'
}


const Videography = ({ data }) => {
    const designImages = [
        {
            sizes: data.companyCustomer.childImageSharp.sizes,
            to: '/company-customer',
            text: 'Company & Customer Spotlight'
        },
        {
            sizes: data.training.childImageSharp.sizes,
            to: '/training',
            text: 'Training & Technical'
        },
        {
            sizes: data.social.childImageSharp.sizes,
            to: '/social-videography',
            text: 'Social Campaigns'
        },
        {
            sizes: data.event.childImageSharp.sizes,
            to: '/event-videography',
            text: 'Event Highlight'
        }
    ]

    const strategyImages = [
        {
            sizes: data.sloMo.childImageSharp.sizes,
            to: '/slow-motion-videography',
            text: 'Slow-Mo Video Booth'
        },
        {
            sizes: data.products.childImageSharp.sizes,
            to: '/product-videography',
            text: 'Products'
        },
        {
            sizes: data.aerial.childImageSharp.sizes,
            to: '/aerial-videography',
            text: 'Aerial'
        },
        {
            sizes: data.walkThru.childImageSharp.sizes,
            to: '/walk-thru',
            text: '360 Space Walk-Thru'
        }
    ]
    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} textStyle={subTextStyle} subText="Design & Strategy" />
            <div {...center}>
                <h1 {...uppercase}>Purpose</h1>
                <p>Your most important marketing assets should support your brand strategy. Whether you are reconstructing your image or building foundational tools to further your message, let us help you find the right path.</p>
            </div>
            <div {...center}>
                <h1 {...uppercase}>Design</h1>
                <p>In this ever changing technological landscape, you have options, sometimes too many options. Do you want a Wordpress website or a custom coded website? What social campaigns will lead to a higher conversion rate? Contact us to examine your opportunities and see what we have been up to.</p>
            </div>
            <PhotoLinkArray images={designImages} photoStyle={photoStyle} arrayStyle={arrayStyle} />
            <div {...center}>
                <h1 {...uppercase}>Strategy</h1>
                <p>Need help?</p>
            </div>
            <PhotoLinkArray images={strategyImages} photoStyle={photoStyle} arrayStyle={arrayStyle} />
            <PhotoLink sizes={data.portfolio.childImageSharp.sizes} text="Elevate youur marketing with custom visuals" to="/" containerStyle={largeContainerPhoto} />
        </div>
    )
}

export default Videography

export const query = graphql`
query designStrategyQuery {
  splash: file (relativePath: {eq: "img/PhotographyHeader.jpg"}) {
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
  companyYouKeepLogos:  allFile(filter: {relativeDirectory: {eq: "img/COMPANY_YOU_KEEP_LOGOS/Videography"}, extension: {regex: "/jpg|png/"}}){
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
  portfolio: file(relativePath: {eq: "img/Videography/Recent_Portfolio_Videography_Icon.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  companyCustomer: file(relativePath: {eq: "img/Videography/Company_Customer_Spotlight_Videography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  training: file(relativePath: {eq: "img/Videography/Training_Technical_Videography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  social: file(relativePath: {eq: "img/Videography/Social_Campaigns_Videography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  event: file(relativePath: {eq: "img/Videography/Event_Highlight_Videography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  sloMo: file(relativePath: {eq: "img/Videography/Slow_Mo_Video_Booth.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  products: file(relativePath: {eq: "img/Videography/Product_Videography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  aerial: file(relativePath: {eq: "img/Videography/Aerial_Videography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  walkThru: file(relativePath: {eq: "img/Videography/360_Space_Walk_Thru.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
} 
`
