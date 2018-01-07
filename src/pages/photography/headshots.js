import React from 'react';
import PhotoGallery from '../../components/photoGallery'

const HeadshotPhotography = ({ data }) => {

    return (
        <PhotoGallery title="Headshot Photography" photos={data.allFile.edges} />
    )
}

export default HeadshotPhotography

export const query = graphql`
query HeadshotQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Headshots_&_Portrait_Gallery" },
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
