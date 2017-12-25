import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'

const logoArray = css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '175px',
})

const imageStyle = css({
    margin: '5px 5px 5px 5px',
    minWidth: '125px'
})

const PartnerLogos = props => {
    console.log(props)
    return (
        <div {...logoArray}>
            {props.partnerLogos.edges.map((file, i) => {
                return (
                    <div key={i} {...imageStyle}>
                        <Img sizes={file.node.childImageSharp.sizes} /> 
                    </div>
                )   
            })}
        </div>
    )
}

export default PartnerLogos
