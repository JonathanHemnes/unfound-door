import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import PhotoLinkArray from '../components/photoLinkArray'
import PartnerLogos from '../components/partnerLogos.js'

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

const marginBottom = css({
    marginBottom: '20px'
})

const Videography = ({ data }) => {
    const videographyImages = [
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
        },
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
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} textStyle={subTextStyle} subText="Videography" />
            <div {...center}>
                <h1>Videography</h1>
                <p>Elevate your company videography with the videographer that suits your vision, style, and budget. Discover unique opportunities to work with a variety of videographer geniuses.</p>
            </div>
            <PhotoLinkArray images={videographyImages} photoStyle={photoStyle} arrayStyle={arrayStyle} />
            <h1 {...center}>The Company You'll Keep</h1>
            <PartnerLogos partnerLogos={data.companyYouKeepLogos} />
        </div>
    )
}

export default Videography

export const query = graphql`
query videographyQuery {
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
