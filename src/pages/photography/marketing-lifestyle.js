import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'

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
                fixed(width:600) {
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }
      }
    }
  }
`
