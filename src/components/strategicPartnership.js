import React from 'react'
import { css } from 'glamor'
import PhotoWithTextOverlay from './photoWithTextOverlay'
import PhotoLink from './photoLink'
import StyleStandards from '../styleStandards.js'
import PartnerLogos from './partnerLogos'


const textStyle = css({
    fontSize: '30px',
    textTransform: 'uppercase'
})

const subTextStyle = css({
    fontSize: '20px'
})

const strategyPhotoStyle = css({
    minHeight: '200px'
})

const StrategicPartnership = props => {
    return (
        <div>
            <PhotoWithTextOverlay sizes={props.img.sizes} textStyle={textStyle} subTextStyle={subTextStyle} text={'Strategic Partnerships'} subText={'Organizations and businesses we work with to bring you value'} imgStyle={strategyPhotoStyle} />
            <PartnerLogos partnerLogos={props.partnerLogos} />
        </div>
    )
}

export default StrategicPartnership
