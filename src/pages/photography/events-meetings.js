import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'
import TemplateWrapper from "../../layouts/index"

const EventPhotography = ({ data }) => {
  return (
    <TemplateWrapper>
      <PhotoGallery title="Events & Meeting Photography" photos={data.allFile.edges} />
    </TemplateWrapper>
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
                fixed(width:600) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
      }
    }
  }
`
