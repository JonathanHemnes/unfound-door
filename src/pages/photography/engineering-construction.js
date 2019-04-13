import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'
import TemplateWrapper from "../../layouts/index"

const EngineeringPhotography = ({ data }) => {

  return (
    <TemplateWrapper>
      <PhotoGallery title="Engineering & Construction Photography" photos={data.allFile.edges} />
    </TemplateWrapper>
  )
}

export default EngineeringPhotography

export const query = graphql`
query EngineeringQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Engineering_Construction_Photography" },
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
