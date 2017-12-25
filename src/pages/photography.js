import React from 'react'
import { css } from 'glamor'
import Splash from '../components/splash'
import PhotoLinkArray from '../components/photoLinkArray'

const subTextStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const arrayStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
})

const photoStyle = css({
    width: '300px'
})

const Photography = ({ data }) => {
    const images=[
        {
            sizes: data.headshot.childImageSharp.sizes,
            to: '/headshots',
            text: 'Headshots'
        },
        {
            sizes: data.eventsMeetings.childImageSharp.sizes,
            to: '/events_meetings',
            text: 'Events & Meetings'
        },
        {
            sizes: data.marketingLifestyle.childImageSharp.sizes,
            to: '/marketing_lifestyle',
            text: 'Marketing & Lifestyle'
        },

    ]
    return (
        <div>
            <Splash sizes={data.splash.childImageSharp.sizes} logo={data.logo.childImageSharp} textStyle={subTextStyle} subText="Photography" />
            <PhotoLinkArray images={images} photoStyle={photoStyle} arrayStyle={arrayStyle} />
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
} 
`
