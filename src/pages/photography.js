import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'

const subTextStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const Photography = ({ data }) => {
    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} textStyle={subTextStyle} subText="Photography" />
        </div>
        )
}

export default Photography

export const query = graphql`
query photographyQuery {
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
} 
`
