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
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const connectArea = css({
    flex: 1
})

const inputStyle = css({
    width: '100%',
    maxWidth: '600px',
    minWidth: '200px',
    marginBottom: '35px',
    '> input' : {
        width: '100%',
        background: StyleStandards.colors.grey,
        border: 'none'
    },
    '> textArea' : {
        width: '100%',
        background: StyleStandards.colors.grey,
        border: 'none'
    }
})

const callToAction = css({
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingBottom: '25px'
})

const buttonStyle = css({
    ...StyleStandards.animations.greyHoverBackground,
    textDecoration: `none`,
    padding: `15px 30px 15px 30px`,
    border: `2px solid black`,
    color: StyleStandards.colors.black,
    textTransform: 'uppercase',
    fontSize: '1rem'
})

class Contact extends React.Component { 
    constructor({props, data}) {
        super(props);
        this.data = data;
        this.state = {
            subText: 'Contact Us'
        }
    }

    componentDidMount() {
        if (window.location.search) {
            const cleansedSearch = decodeURIComponent( window.location.search.slice(1) )
            const subText = `Contact Us About ${cleansedSearch}` 
            this.setState({subText})
        } 
    }
    render () {
        return (
            <div>
                <Splash sizes={this.data.splash.childImageSharp.sizes} logo={this.data.logo.childImageSharp} subText={this.state.subText} />
                <div {...StyleStandards.marginTop} {...header}>
                    <h1 {...noBottomMargin}>Be Found</h1>
                    <p>Start your journey towards creative freedom by contacting us today. Discover what happens when creativity meets efficiency.</p>
                </div>
                <div {...StyleStandards.marginTop} {...StyleStandards.marginBottom} {...flexContainer}>
                    <form name="contact" data-netlify="true" {...contactForm}>
                        <h2>Give Us A Shout</h2>
                        <div {...inputStyle}>
                            <input type="text" name="name" placeholder="Name" required/>
                        </div>
                        <div {...inputStyle}>
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div {...inputStyle}>
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <div {...callToAction}>
                            <button type="submit" {...buttonStyle}>Submit</button>
                        </div>
                    </form>
                    <div {...connectArea}>
                        <Address /> 
                    </div>
                </div>
                <MainServices />
                <div {...photoArray}>
                    <PhotoLink to={'/about'} sizes={this.data.whoWeArePhoto.childImageSharp.sizes} text={'Who We Are'} subText={'Artists, Innovators, Professionals'} textStyle={textStyle} subTextStyle={subTextStyle} imgStyle={imageStyle} />
                </div>
            </div>
        )
    }
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
