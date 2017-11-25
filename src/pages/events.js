import React from 'react';
import { css } from 'glamor';
import Img from 'gatsby-image'

function getWidthFromPhotoPath(path) {
    return 500;
}

function getHeightFromPhotoPath(path) {
    return 583;
}

const Events = ({ data }) => {
    const images = css({
        display: 'flex',
    })

    const image = css({
        maxWidth: '500px',
        width: '30%',
        padding: '5px'
    })
    
    return (
        <div {...images}>
            {data.allFile.edges.map((edge, i) => {
                if (!edge.node.childImageSharp) {
                    return null;
                }
                return <div {...image} key={i} >
                        <Img sizes={edge.node.childImageSharp.sizes} />
                    </div>
            })}
        </div>
    )
}

export default Events

export const query = graphql`
query ImagesQuery {
    allFile(
      filter:{relativeDirectory:{eq: "img/Events_&_Meetings"}}
    ) {
      edges {
        node {
            childImageSharp {
                sizes {
                    ...GatsbyImageSharpSizes_withWebp
                }
            }
        }
      }
    }
  }
`
