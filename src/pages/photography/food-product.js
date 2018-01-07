import React from 'react';
import PhotoGallery from '../../components/photoGallery'

const FoodPhotography = ({ data }) => {

    return (
        <PhotoGallery title="Food & Product Photography" photos={data.allFile.edges} />
    )
}

export default FoodPhotography

export const query = graphql`
query FoodQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Food_&_Product_Gallery" },
          extension: { eq: "jpg" }
        }
    ) {
      edges {
        node {
            childImageSharp {
                resolutions(width:600) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
      }
    }
  }
`
