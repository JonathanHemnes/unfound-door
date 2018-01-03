import React from 'react';
import PhotoGallery from '../components/photoGallery'

const Events = ({ data }) => {
    return (
        <PhotoGallery title="Events & Meetings" photos={data.allFile.edges} />
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
