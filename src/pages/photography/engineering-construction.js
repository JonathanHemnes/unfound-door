import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'

const EngineeringPhotography = ({ data }) => {

    return (
        <PhotoGallery title="Engineering & Construction Photography" photos={data.allFile.edges} />
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
                resolutions(width:1200) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
      }
    }
  }
`
