import React from 'react'
import { css } from 'glamor'
import leftPhoto from '../img/MeetingPhoto-TheUnfoundDoor.jpg'
import rightPhoto from '../img/MeetingPhoto-TheUnfoundDoor.jpg'
import PhotoWithTextOverlay from './photoWithTextOverlay'

const header = css({
    textAlign: `center`
})
const photos = css({
    display: `flex`
})
const photo = css({
    width: `50%`,
    height: `50%`
})

const overlayTextStyle = css({
    color: `white`
})

const overlayText = 'I want to live in a world where things are blah'

const Founder = () => (
    <div>
        <div {...header}>
            <h2>Founder</h2>
            <h5>Ely Hemnes SOMETHING</h5>
        </div>
        <div {...photos}>
            <img src={leftPhoto} {...photo} />
            <PhotoWithTextOverlay src={rightPhoto} text={overlayText} textStyle={overlayTextStyle} />
        </div>
    </div>
)

export default Founder