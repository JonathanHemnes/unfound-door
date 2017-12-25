import React from 'react'
import { css } from 'glamor'
import PhotoWithTextOverlay from './photoWithTextOverlay'
import strategicPartnershipPhoto from '../img/PhotographyHeader-Option2-TheUnfoundDoor.jpg'
import PhotoLink from './photoLink'
import StyleStandards from '../styleStandards.js'
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

const textStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const subTextStyle = css({
    fontSize: '20px'
})

const StrategicPartnership = props => {
    return (
        <div>
            <PhotoWithTextOverlay sizes={props.img.sizes} textStyle={textStyle} subTextStyle={subTextStyle} text={'Strategic Partnerships'} subText={'Organizations and businesses we work with to bring you value'} />
            <div {...logoArray}>
                {props.partnerLogos.edges.map((file, i) => {
                    return (
                        <div key={i} {...imageStyle}>
                            <Img sizes={file.node.childImageSharp.sizes} /> 
                        </div>
                    )   
                })}
            </div>
        </div>
    )
}

export default StrategicPartnership
