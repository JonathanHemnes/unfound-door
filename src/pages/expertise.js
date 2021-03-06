import React from 'react'
import { css } from 'glamor'
import Helmet from 'react-helmet'
import Splash from '../components/splash'
import MainServices from '../components/mainServices'
import AboutHeader from '../components/aboutHeader'
import WhoWhatWhere from '../components/whoWhatWhere'
import PartnerLogos from '../components/partnerLogos'
import StyleStandards from '../styleStandards'
import { graphql } from 'gatsby'

const center = css({
  textAlign: 'center'
})

const uppercase = css({
    textTransform: 'uppercase'
})

const padding = css({
    margin: '75px 0 20px 0'
})

const header = css({
    backgroundColor: StyleStandards.colors.grey,
    padding: '20px 0 20px 0',
    marginTop: '40px'
})

const noBottomMargin = css({
    marginBottom: '0px'
})

const who = 'We are a creative consultancy firm working the best creatives in every industry with services ranging from photography and videography to design and content creation.';
const what = 'We are dedicated to creating the ultimate seamless experience by offering a diversity of creative services with precision, technique, and passion.';
const why = 'We believe that you should have a designated team focused on aiding you throughout the process of crafting and implementing your vision.';
const where = 'Where ever you are we can go!';
const how = 'Schedule a meeting to discuss how you can discover your creative possibilities that best reflect your vision with creatives that will surpass your expectations today.';

const Expertise = ({props, data}) => {
    return (
        <div>
            <Helmet
                meta={[
                    { name: 'description', content: what }
                ]}
            />
            <Splash fluid={data.file.childImageSharp.fluid} logo={data.logo.childImageSharp} subText="Our Expertise" email={data.site.siteMetadata.mainEmail} alt="Man in grey suit standing holding a drink"/>
            <div>
                <div {...header}>
                    <AboutHeader />
                    <WhoWhatWhere who={who} what={what} where={where} why={why} how={how} />
                </div>
                <div {...center} {...padding}>
                    <h1 {...noBottomMargin} {...uppercase}>Our Services</h1>
                    <p>Follow the services below to see more of what we do.</p>
                </div>
                <MainServices />
                <div {...center} {...uppercase} {...padding}>
                    <h1 {...noBottomMargin}>The Company You'll keep</h1>
                </div>
                <PartnerLogos partnerLogos={data.companyYouKeepLogos} />
        </div>
        </div>
    )
}

export default Expertise

export const query = graphql`
query expertiseQuery {
    site {
      siteMetadata {
        title,
        mainEmail,
        mainPageSubText
      }
    },
  file (relativePath: {eq: "img/header/expertise.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  logo: file(relativePath: {eq: "img/TUD_Main_Page_Logo.png"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  strategicPartnership: file(relativePath: {eq: "img/Strategic_Partnership.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  partnerLogos:  allFile(filter: {relativeDirectory: {eq: "img/Partner_Logos"}, extension: {regex: "/jpg|png/"}}){
    edges {
        node {
            childImageSharp {
               fluid (maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
  }
  companyYouKeepLogos:  allFile(filter: {relativeDirectory: {eq: "img/COMPANY_YOU_KEEP_LOGOS/Photography"}, extension: {regex: "/jpg|png/"}}){
    edges {
        node {
            childImageSharp {
               fluid (maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
  }
}
`
