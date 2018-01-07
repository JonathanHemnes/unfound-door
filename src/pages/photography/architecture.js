import React from 'react';
import PhotoGallery from '../../components/photoGallery'

const ArchitecturePhotography = ({ data }) => {

    return (
        <PhotoGallery title="Architecture Photography" photos={data.allFile.edges} />
    )
}

export default ArchitecturePhotography

export const query = graphql`
query ArchitectureQuery {
    allFile(
      filter:{
          relativeDirectory: { eq: "img/Galleries/Architecture_&_Project_Progress_Gallery" },
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
