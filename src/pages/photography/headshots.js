import React from 'react';
import PhotoGallery from '../../components/photoGallery'
import { graphql } from 'gatsby'

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
