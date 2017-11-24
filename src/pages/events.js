import React from 'react';
import { css } from 'glamor';

function getWidthFromPhotoPath(path) {
    return 500;
}

function getHeightFromPhotoPath(path) {
    return 583;
}

const Events = ({ data }) => {
    const images = data.allFile.edges.filter(edge => {
        return edge.node.relativePath.indexOf('img/Events_&_Meetings') !== -1
    }).map(edge => edge.node.relativePath)

    const imageSrc = images.map(path => {
        return {
            src: path,
            width: getWidthFromPhotoPath(path),
            height: getHeightFromPhotoPath(path)
        }
    })
    console.log(imageSrc)
    return (
        <div>
            <h1>HELLO</h1>
            {/* <div>{data}</div> */}
        </div>
    )
}

export default Events

export const query = graphql`
query MyFilesQuery {
  allFile {
    edges {
      node {
        relativePath
        prettySize
        extension
        birthTime(fromNow: true)
      }
    }
  }
}
`