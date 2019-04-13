import React from "react"
import { css } from "glamor"
import Splash from "../components/splash"
import PhotoLinkArray from "../components/photoLinkArray"
import PartnerLogos from "../components/PartnerLogos.js"
import CustomerReviews from "../components/CustomerReviews"
import LetsTalk from "../components/LetsTalk"
import StyleStandards from "../styleStandards"
import { graphql } from "gatsby"
import TemplateWrapper from "../layouts/index"

const container = css({
  margin: "75px 0 75px 0",
})

const uppercase = css({
  textTransform: "uppercase",
})

const arrayStyle = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
})

const photoStyle = css({
  flex: 1,
  overflow: "hidden",
})

const center = css({
  textAlign: "center",
  marginLeft: "15%",
  marginRight: "15%",
})

const marginBottom = css({
  marginBottom: "75px",
})

const noBottomMargin = css({
  marginBottom: "0px",
})

const header = css({
  textTransform: "uppercase",
  marginBottom: 0,
})

const bottomPadding = css({
  marginBottom: "35px",
})

const textStyle = css({
  fontSize: "1.4rem",
})

const smallerFontOnSmallScreen = css({
  "@media(max-width: 400px)": {
    fontSize: "1.4rem",
  },
})

const Photography = ({ data }) => {
  const professionalImages = [
    {
      fluid: data.headshot.childImageSharp.fluid,
      to: "/photography/headshots",
      text: "Headshots & Portraits",
    },
    {
      fluid: data.eventsMeetings.childImageSharp.fluid,
      to: "/photography/events-meetings",
      text: "Events & Meetings",
    },
    {
      fluid: data.marketingLifestyle.childImageSharp.fluid,
      to: "/photography/marketing-lifestyle",
      text: "Marketing Lifestyle",
    },
    {
      fluid: data.nonProfit.childImageSharp.fluid,
      to: "/contact",
      text: "Non-Profit Giving Back",
    },
    {
      fluid: data.engineeringConstruction.childImageSharp.fluid,
      to: "/photography/engineering-construction",
      text: "Engineering / Construction",
    },
    {
      fluid: data.architecture.childImageSharp.fluid,
      to: "/photography/architecture",
      text: "Architecture & Project Progress",
    },
    {
      fluid: data.aerial.childImageSharp.fluid,
      to: "/contact",
      text: "Aerial",
    },
    {
      fluid: data.foodProduct.childImageSharp.fluid,
      to: "/photography/food-product",
      text: "Food & Product",
    },
  ]
  const personalImages = [
    {
      fluid: data.wedding.childImageSharp.fluid,
      to: "/contact",
      text: "Weddings & Couples Portraits",
    },
    {
      fluid: data.families.childImageSharp.fluid,
      to: "/contact",
      text: "Families & Babies",
    },
    {
      fluid: data.portraits.childImageSharp.fluid,
      to: "/contact",
      text: "Portraits & Seniors",
    },
    {
      fluid: data.boudoir.childImageSharp.fluid,
      to: "/contact",
      text: "Boudoir",
    },
  ]
  return (
    <TemplateWrapper>
      <Splash
        fluid={data.splash.childImageSharp.fluid}
        logo={data.logo.childImageSharp}
        subText="Photography"
        email={data.site.siteMetadata.mainEmail}
        alt="Woman wearing flourescent yellow shirt holding beam above her head"
      />
      <div {...center} {...bottomPadding} {...StyleStandards.marginTop}>
        <h1 {...header} {...smallerFontOnSmallScreen}>
          Professional Photography
        </h1>
        <p>
          Elevate your company photography with the photographer that suits your
          vision, style, and budget. Discover unique opportunities to work with
          a variety of photographic geniuses.
        </p>
        <LetsTalk email={data.site.siteMetadata.mainEmail} />
      </div>
      <PhotoLinkArray
        images={professionalImages}
        photoStyle={photoStyle}
        arrayStyle={arrayStyle}
        textStyle={textStyle}
      />
      <div {...container}>
        <h1
          {...center}
          {...noBottomMargin}
          {...uppercase}
          {...smallerFontOnSmallScreen}
        >
          The Company You'll Keep
        </h1>
        <PartnerLogos partnerLogos={data.companyYouKeepLogos} />
      </div>
      <div {...center}>
        <h1 {...uppercase} {...noBottomMargin} {...smallerFontOnSmallScreen}>
          Personal Photography
        </h1>
        <p>Creating keepsakes, one moment at a time</p>
        <LetsTalk email={data.site.siteMetadata.mainEmail} />
      </div>
      <div {...marginBottom}>
        <PhotoLinkArray
          images={personalImages}
          photoStyle={photoStyle}
          arrayStyle={arrayStyle}
          textStyle={textStyle}
        />
      </div>
      <CustomerReviews />
    </TemplateWrapper>
  )
}

export default Photography

export const query = graphql`
  query photographyQuery {
    site {
      siteMetadata {
        title
        mainEmail
        mainPageSubText
      }
    }
    splash: file(relativePath: { eq: "img/PhotographyHeader.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    logo: file(relativePath: { eq: "img/TUD_Main_Page_Logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    partnerLogos: allFile(
      filter: {
        relativeDirectory: { eq: "img/Partner_Logos" }
        extension: { regex: "/jpg|png/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    companyYouKeepLogos: allFile(
      filter: {
        relativeDirectory: { eq: "img/COMPANY_YOU_KEEP_LOGOS/Photography" }
        extension: { regex: "/jpg|png/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    headshot: file(
      relativePath: { eq: "img/Photography_Sections/Headshot_Portrait.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    eventsMeetings: file(
      relativePath: { eq: "img/Photography_Sections/Events_Meetings.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    marketingLifestyle: file(
      relativePath: { eq: "img/Photography_Sections/Marketing_Lifestyle.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nonProfit: file(
      relativePath: { eq: "img/Photography_Sections/Nonprofit.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    engineeringConstruction: file(
      relativePath: {
        eq: "img/Photography_Sections/Engineering_Construction.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    architecture: file(
      relativePath: { eq: "img/Photography_Sections/Architecture_Project.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aerial: file(
      relativePath: { eq: "img/Photography_Sections/Aerial_Photography.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    foodProduct: file(
      relativePath: { eq: "img/Photography_Sections/Food_and_Product.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    wedding: file(
      relativePath: {
        eq: "img/Photography_Sections/Weddings_Couple_Portraits.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    families: file(
      relativePath: { eq: "img/Photography_Sections/Families_babies.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    boudoir: file(
      relativePath: { eq: "img/Photography_Sections/Boudoir_Photography.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    portraits: file(
      relativePath: { eq: "img/Photography_Sections/Portraits_Seniors.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
