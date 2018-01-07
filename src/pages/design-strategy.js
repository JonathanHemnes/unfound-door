import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import PhotoLinkArray from '../components/photoLinkArray'
import PhotoLink from '../components/photoLink'
import PartnerLogos from '../components/partnerLogos.js'
import WhoWhatWhere from '../components/whoWhatWhere'
import StyleStandards from '../styleStandards'
import LetsTalk from '../components/letsTalk'

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
    marginLeft: '4%',
    marginRight: '4%',

})

const uppercase = css({
    textTransform: 'uppercase'
})

const marginBottom = css({
    marginBottom: '20px'
})

const noMarginBottom = css({
    marginBottom: 0 
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

const textStyle = css({
    fontSize: '1.4rem'
})

const headerStyle = css({
    fontSize: '2.5rem',
    lineHeight: 1,
    '@media(max-width: 400px)': {
        fontSize: '1rem'
    }
})

const DesignStrategy = ({ data }) => {
    const designImages = [
        {
            sizes: data.graphic.childImageSharp.sizes,
            to: '/graphic-design',
            text: 'Graphic Design & Branding'
        },
        {
            sizes: data.webDesign.childImageSharp.sizes,
            to: '/web-design',
            text: 'Web Design & Website Maintenance'
        },
        {
            sizes: data.socialMedia.childImageSharp.sizes,
            to: '/social-media',
            text: 'Social Media'
        },
        {
            sizes: data.contentCreation.childImageSharp.sizes,
            to: '/content-creation',
            text: 'Content Creation & SEO'
        }
    ]

    const strategyImages = [
        {
            sizes: data.account.childImageSharp.sizes,
            to: '/account-management',
            text: 'Account Management'
        },
        {
            sizes: data.smallBusinessFoundation.childImageSharp.sizes,
            to: '/small-business-foundation',
            text: 'Small Business Foundation'
        },
        {
            sizes: data.businessDevelopment.childImageSharp.sizes,
            to: '/business-development',
            text: 'Business Development'
        },
        {
            sizes: data.creative.childImageSharp.sizes,
            to: '/creative-blueprint',
            text: 'Creative Blueprint'
        }
    ]

    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} textStyle={subTextStyle} subText="Design & Strategy" />
            <div {...center} {...StyleStandards.marginTop}>
                <h1 {...uppercase} {...noMarginBottom}>Purpose</h1>
                <p>Your most important marketing assets should support your brand strategy. Whether you are reconstructing your image or building foundational tools to further your message, let us help you find the right path.</p>
                <LetsTalk email={data.site.siteMetadata.mainEmail} />
            </div>
            <div {...center} {...StyleStandards.marginTop}>
                <h1 {...uppercase} {...noMarginBottom}>Design</h1>
                <p>In this ever changing technological landscape, you have options, sometimes too many options. Do you want a Wordpress website or a custom coded website? What social campaigns will lead to a higher conversion rate? Contact us to examine your opportunities and see what we have been up to.</p>
            </div>
            <PhotoLinkArray images={designImages} photoStyle={photoStyle} arrayStyle={arrayStyle} textStle={textStyle} />
            <div {...center} {...StyleStandards.marginTop}>
                <h1 {...uppercase} {...noMarginBottom}>Strategy</h1>
                <p>Whether persuing new avenues or designing a future marketing plan, having an outsiders perspective may aid your process. If you require guidance with setting priorities, focusing energy and resources, strengthening operations, or thinking big picture contact us today.</p>
            </div>
            <div {...StyleStandards.marginBottom}>
                <PhotoLinkArray images={strategyImages} photoStyle={photoStyle} arrayStyle={arrayStyle} textStyle={textStyle} />
                <PhotoLink sizes={data.elevate.childImageSharp.sizes} text="Elevate your marketing with custom visuals" to="/" containerStyle={largeContainerPhoto} textStyle={headerStyle} />
        </div>
        </div>
    )
}

export default DesignStrategy

export const query = graphql`
query designStrategyQuery {
  site {
    siteMetadata {
      title,
      mainEmail,
      mainPageSubText
    }
  },
  splash: file (relativePath: {eq: "img/Design_Strategy/Header.jpg"}) {
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
  elevate: file(relativePath: {eq: "img/Design_Strategy/Elevate_Marketing_Materials.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  account: file(relativePath: {eq: "img/Design_Strategy/Account_Management.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  graphic: file(relativePath: {eq: "img/Design_Strategy/Graphic_Design_and_Branding.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  creative: file(relativePath: {eq: "img/Design_Strategy/Creative_Suite.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  contentCreation: file(relativePath: {eq: "img/Design_Strategy/Creative_Suite.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  socialMedia: file(relativePath: {eq: "img/Design_Strategy/Social_Media.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  webDesign: file(relativePath: {eq: "img/Design_Strategy/WebDesign_and_Website_Maintenence.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  businessDevelopment: file(relativePath: {eq: "img/Design_Strategy/Business_Development.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  smallBusinessFoundation: file(relativePath: {eq: "img/Design_Strategy/Small_Business_Foundation.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
} 
`
