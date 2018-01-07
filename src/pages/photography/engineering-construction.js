import React from 'react';
import PhotoGallery from '../../components/photoGallery'

const EngineeringPhotography = ({ data }) => {

    return (
        <PhotoGallery title="Engineering Photography" photos={data.allFile.edges} />
    )
}

export default EngineeringPhotography

export const query = graphql`
query EngineeringQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Engineering_Construction_Gallery" },
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
