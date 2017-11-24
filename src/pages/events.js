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
    console.log(data)
    
    return (
        <div>
            <h1>HELLO</h1>
            <Img sizes={data.file.childImageSharp.sizes} />
        </div>
    )
}

export default Events

export const query = graphql`
query ImagesQuery {
  file(relativePath: { eq: "img/Events_&_Meetings/The_Unfound_Door_Events_&_Meetings_533X800_101.jpg"}) {
    childImageSharp {
      # Specify the image processing steps right in the query
      # Makes it trivial to update as your page's design changes.
      sizes {
          ...GatsbyImageSharpSizes
      }
    }
  }
}
`
