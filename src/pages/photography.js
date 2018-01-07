import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import PhotoLinkArray from '../components/photoLinkArray'
import PartnerLogos from '../components/partnerLogos.js'
import CustomerReviews from '../components/customerReviews'
import LetsTalk from '../components/letsTalk'
import StyleStandards from '../styleStandards'

const container = css({
    margin: '75px 0 75px 0',
})

const subTextStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const uppercase = css({
    textTransform: 'uppercase'
})

const arrayStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
})

const photoStyle = css({
    flex:1,
    overflow: 'hidden'
})

const center = css({
    textAlign: 'center',
    marginLeft: '15%',
    marginRight: '15%',
})

const marginBottom = css({
    marginBottom: '75px'
})

const noBottomMargin = css({
    marginBottom: '0px'
})

const header = css({
    textTransform: 'uppercase',
    marginBottom: 0
})

const bottomPadding = css({
    marginBottom: '35px'
})

const textStyle = css({
    fontSize: '1.4rem'
})

const smallerFontOnSmallScreen = css({
    '@media(max-width: 400px)': {
        fontSize: '1.4rem'
    }
})

const Photography = ({ data }) => {
    const professionalImages=[
        {
            sizes: data.headshot.childImageSharp.sizes,
            to: '/photography/headshots',
            text: 'Headshots & Portraits'
        },
        {
            sizes: data.eventsMeetings.childImageSharp.sizes,
            to: '/photography/events-meetings',
            text: 'Events & Meetings'
        },
        {
            sizes: data.marketingLifestyle.childImageSharp.sizes,
            to: '/photography/marketing-lifestyle',
            text: 'Marketing Lifestyle'
        },
        {
            sizes: data.nonProfit.childImageSharp.sizes,
            to: '/photography/nonprofits',
            text: 'Non-Profit Giving Back'
        },
        {
            sizes: data.engineeringConstruction.childImageSharp.sizes,
            to: '/photography/engineering-construction',
            text: 'Engineering / Construction'
        },
        {
            sizes: data.architecture.childImageSharp.sizes,
            to: '/photography/architecture',
            text: 'Architecture & Project Progress'
        },
        {
            sizes: data.aerial.childImageSharp.sizes,
            to: '/photography/aerial',
            text: 'Aerial'
        },
        {
            sizes: data.foodProduct.childImageSharp.sizes,
            to: '/photography/food-product',
            text: 'Food & Product'
        }
    ]
    const personalImages = [
        {
            sizes: data.wedding.childImageSharp.sizes,
            to: '/photography/weddings',
            text: 'Weddings & Couples Portraits'
        },
        {
            sizes: data.families.childImageSharp.sizes,
            to: '/photography/families',
            text: 'Families & Babies'
        },
        {
            sizes: data.portraits.childImageSharp.sizes,
            to: '/photography/portraits',
            text: 'Portraits & Seniors'
        },
        {
            sizes: data.boudoir.childImageSharp.sizes,
            to: '/photography/boudoir',
            text: 'Boudoir'
        },
    ]
    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} subText="Photography" />
            <div {...center} {...bottomPadding} {...StyleStandards.marginTop}>
                <h1 {...header} {...smallerFontOnSmallScreen}>Professional Photography</h1>
                <p>Elevate your company photography with the photographer that suits your vision, style, and budget. Discover unique opportunities to work with a variety of photographic geniuses.</p>
                <LetsTalk email={data.site.siteMetadata.mainEmail} />
            </div>
            <PhotoLinkArray images={professionalImages} photoStyle={photoStyle} arrayStyle={arrayStyle} textStyle={textStyle} />
            <div {...container}>
                <h1 {...center} {...noBottomMargin} {...uppercase} {...smallerFontOnSmallScreen}>The Company You'll Keep</h1>
                <PartnerLogos partnerLogos={data.companyYouKeepLogos} />
            </div>
            <div {...center}>
                <h1 {...uppercase} {...noBottomMargin} {...smallerFontOnSmallScreen}>Personal Photography</h1>
                <p>Creating keepsakes, one moment at a time</p>
                <LetsTalk email={data.site.siteMetadata.mainEmail} />
            </div>
            <div {...marginBottom}>
                <PhotoLinkArray images={personalImages} photoStyle={photoStyle} arrayStyle={arrayStyle} textStyle={textStyle} />
            </div>
            <CustomerReviews />
        </div>
    )
}

export default Photography

export const query = graphql`
query photographyQuery {
  site {
    siteMetadata {
      title,
      mainEmail,
      mainPageSubText
    }
  },
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
  partnerLogos:  allFile(filter: {relativeDirectory: {eq: "img/Partner_Logos"}, extension: {regex: "/jpg|png/"}}){
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
  companyYouKeepLogos:  allFile(filter: {relativeDirectory: {eq: "img/COMPANY_YOU_KEEP_LOGOS/Photography"}, extension: {regex: "/jpg|png/"}}){
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
  headshot: file(relativePath: {eq: "img/Photography_Sections/Headshot_Portrait.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  eventsMeetings: file(relativePath: {eq: "img/Photography_Sections/Events_Meetings.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  marketingLifestyle: file(relativePath: {eq: "img/Photography_Sections/Marketing_Lifestyle.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  nonProfit: file(relativePath: {eq: "img/Photography_Sections/Nonprofit.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  engineeringConstruction: file(relativePath: {eq: "img/Photography_Sections/Engineering_Construction.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  architecture: file(relativePath: {eq: "img/Photography_Sections/Architecture_Project.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  aerial: file(relativePath: {eq: "img/Photography_Sections/Aerial_Photography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  foodProduct: file(relativePath: {eq: "img/Photography_Sections/Food_and_Product.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  wedding: file(relativePath: {eq: "img/Photography_Sections/Weddings_Couple_Portraits.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  families: file(relativePath: {eq: "img/Photography_Sections/Families_babies.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  boudoir: file(relativePath: {eq: "img/Photography_Sections/Boudoir_Photography.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
  portraits: file(relativePath: {eq: "img/Photography_Sections/Portraits_Seniors.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  } 
} 
`
