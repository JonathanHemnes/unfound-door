import React from 'react';
import { css } from 'glamor';
import Img from 'gatsby-image'
import Gallery from 'react-photo-gallery';

const header = css({
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '30px 0 30px 0'
})

const stripe = css({
    height: '35px',
    backgroundColor: 'black'
})

const Events = ({ data }) => {
    const PHOTO_SET = data.allFile.edges
        .filter(edge => edge.node.childImageSharp && edge.node.childImageSharp.resolutions)
        .map(edge => {
            const photo = edge.node.childImageSharp.resolutions
            return {
                src: photo.src,
                srcSet: photo.srcSet.split(','),
                height: photo.height,
                width: photo.width
            }
        })
    return (
        <div>
            <div {...stripe}></div>
            <div {...header}>
                <h1>Events & Meetings</h1>
            </div> 
            <Gallery photos={PHOTO_SET} />
        </div>
    )
}

export default Events

export const query = graphql`
query ImagesQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Events_&_Meetings" },
          extension: { eq: "jpg" }
        }
    ) {
      edges {
        node {
            childImageSharp {
                resolutions(width:1200) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
      }
    }
  }
`
