import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import PhotoLinkArray from '../components/photoLinkArray'
import PhotoLink from '../components/photoLink'
import PartnerLogos from '../components/partnerLogos.js'
import WhoWhatWhere from '../components/whoWhatWhere'
import StyleStandards from '../styleStandards'
import LetsTalk from '../components/letsTalk'

const smallerFontOnSmallScreen = css({
    '@media(max-width: 470px)': {
        fontSize: '2rem'
    }
})

const portfolioBanner = css({
    fontSize: '2.5rem',
    '@media(max-width: 470px)': {
        fontSize: '1.4rem'
    }
})

const conception = css({
    marginTop: '40px'
})

const arrayStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
})

const textStyle = css({
    fontSize: '1.4rem'
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

const marginSides = css({
    margin: '0 4%'
})

const who = 'is your audience?';
const what = 'is the purpose of the video(s)? What story do you want to tell?';
const why = 'utilize moving picture versus still imagery?';
const where = 'will your audience interact with and view the video(s)?';
const how = 'will your video(s) be narrated?';

const Videography = ({ data }) => {
    const videographyImages = [
        {
            sizes: data.companyCustomer.childImageSharp.sizes,
            to: '/contact',
            text: 'Company & Customer Spotlight'
        },
        {
            sizes: data.training.childImageSharp.sizes,
            to: '/contact',
            text: 'Training & Technical'
        },
        {
            sizes: data.social.childImageSharp.sizes,
            to: '/contact',
            text: 'Social Campaigns'
        },
        {
            sizes: data.event.childImageSharp.sizes,
            to: '/contact',
            text: 'Event Highlight'
        },
        {
            sizes: data.sloMo.childImageSharp.sizes,
            to: '/contact',
            text: 'Slow-Mo Video Booth'
        },
        {
            sizes: data.products.childImageSharp.sizes,
            to: '/contact',
            text: 'Products'
        },
        {
            sizes: data.aerial.childImageSharp.sizes,
            to: '/contact',
            text: 'Aerial'
        },
        {
            sizes: data.walkThru.childImageSharp.sizes,
            to: '/contact',
            text: '360 Space Walk-Thru'
        }
    ]
    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} subText="Videography" email={data.site.siteMetadata.mainEmail} alt="People standing reviewing samples on tables"/>
            <div {...center} {...StyleStandards.marginTop} {...StyleStandards.marginBottom}>
                <h1 {...StyleStandards.uppercase} {...StyleStandards.noBottomMargin} {...smallerFontOnSmallScreen}>Videography</h1>
                <p>The future of reaching new customers and showing your value is through visual storytelling. Whether you are looking to document an important event, provide a 360 Degree Virtual Tour experience, or boast your company culture, videography is a powerful tool.</p>
                <LetsTalk email={data.site.siteMetadata.mainEmail} />
            </div>
            <PhotoLinkArray images={videographyImages} photoStyle={photoStyle} arrayStyle={arrayStyle} textStyle={textStyle} />
            <div {...StyleStandards.marginTop}>
                <PhotoLink sizes={data.portfolio.childImageSharp.sizes} text="Check Out Our Recent Portfolio" href="https://www.youtube.com/channel/UC5byxo-QMxPd2S-jXDhIeeA" containerStyle={largeContainerPhoto} textStyle={portfolioBanner} />
            </div>
            <div {...greyBackground} {...conception}>
                <h1 {...StyleStandards.uppercase} {...StyleStandards.noBottomMargin} {...smallerFontOnSmallScreen}>Conception</h1>
                <p {...marginSides}>Questions to consider and ask when planning videography. Schedule a meeting to discuss your options in person and get insight on how videography is put together.</p>
                <WhoWhatWhere who={who} what={what} where={where} why={why} how={how} />
            </div>
            <div {...StyleStandards.marginTop} {...StyleStandards.marginBottom}>
                <h1 {...center} {...StyleStandards.uppercase} {...StyleStandards.noBottomMargin} {...smallerFontOnSmallScreen}>The Company You'll Keep</h1>
                <PartnerLogos partnerLogos={data.companyYouKeepLogos} />
        </div>
        </div>
    )
}

export default Videography

export const query = graphql`
query videographyQuery {
  site {
    siteMetadata {
      title,
      mainEmail,
      mainPageSubText
    }
  },
  splash: file (relativePath: {eq: "img/Videography/VideographyHeader.jpg"}) {
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
