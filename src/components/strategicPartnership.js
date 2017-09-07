import React from 'react'
import { css } from 'glamor'
import PhotoWithTextOverlay from './photoWithTextOverlay'
import strategicPartnershipPhoto from '../img/PhotographyHeader-Option2-TheUnfoundDoor.jpg'
import PhotoLink from './photoLink'

const partnersStyle = css({
    display: `flex`,
    flexDirection: `row`
})

const partners = [
    { src: strategicPartnershipPhoto, to: 'http://google.com' },
    { src: strategicPartnershipPhoto, to: 'http://google.com' },
    { src: strategicPartnershipPhoto, to: 'http://google.com' },
    { src: strategicPartnershipPhoto, to: 'http://google.com' },
    { src: strategicPartnershipPhoto, to: 'http://google.com' }
]

const StrategicPartnership = props => (
    <div>
        <PhotoWithTextOverlay src={strategicPartnershipPhoto} text={'Strategic Partnerships'} subText={'Organizations and businesses we work with to bring you value'} />
        <div {...partnersStyle}>
            {partners.map((partner, i) => {
                return <PhotoLink key={i} src={partner.src} to={partner.url} />
            })}
        </div>
    </div>
)

export default StrategicPartnership