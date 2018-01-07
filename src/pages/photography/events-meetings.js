import React from 'react';
import PhotoGallery from '../../components/photoGallery'

const EventPhotography = ({ data }) => {
    return (
        <PhotoGallery title="Events & Meetings" photos={data.allFile.edges} />
    )
}

export default EventPhotography

export const query = graphql`
query ImagesQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Events_&_Meetings_Gallery" },
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