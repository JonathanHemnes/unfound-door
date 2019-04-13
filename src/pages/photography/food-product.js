import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'
import TemplateWrapper from "../../layouts/index"

const FoodProductPhotography = ({ data }) => {

  return (
    <TemplateWrapper>
      <PhotoGallery title="Food & Product Photography" photos={data.allFile.edges} />
    </TemplateWrapper>
  )
}

export default FoodProductPhotography

export const query = graphql`
query FoodProductQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Food_&_Product_Photography" },
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
