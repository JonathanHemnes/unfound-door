import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'

const EventPhotography = ({ data }) => {
    return (
        <PhotoGallery title="Events & Meeting Photography" photos={data.allFile.edges} />
    )
}

export default EventPhotography

export const query = graphql`
query ImagesQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Events_&_Meetings_Photography" },
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
