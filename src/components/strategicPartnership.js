import React from 'react'
import { css } from 'glamor'
import PhotoWithTextOverlay from './photoWithTextOverlay'
import PhotoLink from './photoLink'
import StyleStandards from '../styleStandards.js'
import PartnerLogos from './partnerLogos'


const textStyle = css({
    fontSize: '1.7rem',
    textTransform: 'uppercase',
    lineHeight: 1,
    marginBottom: 0
})

const subTextStyle = css({
    fontSize: '20px',
    lineHeight: 1
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
