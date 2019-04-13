import React from 'react';
import PhotoGallery from '../../components/PhotoGallery'
import { graphql } from 'gatsby'
import TemplateWrapper from "../../layouts/index"

const HeadshotPhotography = ({ data }) => {

  return (
    <TemplateWrapper>
      <PhotoGallery title="Headshot Photography" photos={data.allFile.edges} />
    </TemplateWrapper>
  )
}

export default HeadshotPhotography

export const query = graphql`
query HeadshotQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Headshots_&_Portrait_Photography" },
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
