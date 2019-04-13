import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'
import TemplateWrapper from "../../layouts/index"

const ArchitecturePhotography = ({ data }) => {

  return (
    <TemplateWrapper>
      <PhotoGallery title="Architecture Photography" photos={data.allFile.edges} />
    </TemplateWrapper>
  )
}

export default ArchitecturePhotography

export const query = graphql`
query ArchitectureQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Architecture_&_Project_Progress_Photography" },
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
