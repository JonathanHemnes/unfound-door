import React from 'react';
import PhotoGallery from '../../components/photoGallery'

const MarketingPhotography = ({ data }) => {

    return (
        <PhotoGallery title="Headshot Photography" photos={data.allFile.edges} />
    )
}

export default MarketingPhotography

export const query = graphql`
query MarketingQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Marketing_Lifestyle_Photography" },
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