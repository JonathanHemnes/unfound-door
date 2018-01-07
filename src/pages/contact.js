import React from 'react'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'
import Splash from '../components/splash'
import MainServices from '../components/mainServices'
import PhotoLink from '../components/photoLink'
import Address from '../components/address'

const noBottomMargin = css({
    marginBottom: 0
})

const header = css({
    textAlign: 'center'
})

const photoArray = css({
    display: `flex`,
    flexDirection: `row`,
    minHeight: '300px'
})

const imageStyle = css({
    minHeight: '300px',
    overflow: 'hidden'
})

const subTextStyle = css({
    fontSize: '1rem'
})

const textStyle = css({
    fontSize: '2.5rem',
    marginBottom: '0px',
    lineHeight: 1
})

const flexContainer = css({
    display: 'flex',
    fledWrap: 'wrap'
})

const contactForm = css({
    flex: 2
})

const connectArea = css({
    flex: 1
})

const Contact = ({ data }) => {
    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} subText="Contact Us" />
            <div {...StyleStandards.marginTop} {...header}>
                <h1 {...noBottomMargin}>Be Found</h1>
                <p>Start your journey towards creative freedom by contacting us today. Discover what happens when creativity meets efficiency.</p>
            </div>
            <div {...StyleStandards.marginTop} {...StyleStandards.marginBottom} {...flexContainer}>
                <div {...contactForm}>
                    <form name="contact" data-netlify="true">
                        <div>
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div {...connectArea}>
                    <Address /> 
                </div>
            </div>
            <MainServices />
            <div {...photoArray}>
                <PhotoLink to={'/about'} sizes={data.whoWeArePhoto.childImageSharp.sizes} text={'Who We Are'} subText={'Artists, Innovators, Professionals'} textStyle={textStyle} subTextStyle={subTextStyle} imgStyle={imageStyle} />
            </div>
        </div>
    )
}

export default Contact

export const query = graphql`
query contactQuery {
  site {
    siteMetadata {
      title,
      mainEmail,
      mainPageSubText
    }
  },
  splash: file (relativePath: {eq: "img/header/ContactUsHeader.jpg"}) {
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
  whoWeArePhoto: file (relativePath: {eq: "img/Main-WhoWeAre-Header.jpg"}) {
    childImageSharp {
      sizes (maxWidth: 2400) {
        ...GatsbyImageSharpSizes
      }
    }
  },
} 
`
