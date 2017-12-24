import React from 'react'
import { css } from 'glamor'
import leftPhoto from '../img/MeetingPhoto-TheUnfoundDoor.jpg'
import rightPhoto from '../img/MeetingPhoto-TheUnfoundDoor.jpg'
import PhotoWithTextOverlay from './photoWithTextOverlay'

const header = css({
    textAlign: `center`
})
const photos = css({
    display: `flex`,
    flexDirection: 'row'
})
const photo = css({
    width: `50%`,
    height: `50%`
})

const leftPhotoStyle = css({
    flexGrow: 1
})

const overlayTextStyle = css({
    color: `white`,
    fontSize: '18px',
    width: '120%',
    flexGrow: 2
})

const overlayText = 'I want to live in a world where hot air balloon travel is the only option, calories don’t lead to weight gain and people spontaneously break out into song and dance at least once a day. My name is Ely, pro- nounced Ellie, and plot twist: I am not a natural redhead.';

const Founder = () => (
    <div>
        <div {...header}>
            <h1>CEO & Founder</h1>
            <p>CEO of THE<strong>UNFOUND</strong>DOOR and Account Manager of client projects, Ely Hemnes is our client’s primary contact for communication, organization, and logistical support.<br />Her skills include building top-notch teams, constructing frameworks for artistic professionals, aiding clients in curating vision, internal & external strategy, translating client’s vision to technical staff, and managing timelines. Ely is also the quality assurance to assess product before delivery to client.</p>
        </div>
        <div {...photos}>
            <img src={leftPhoto} {...photo} {...leftPhotoStyle} />
            <PhotoWithTextOverlay src={rightPhoto} text={overlayText} textStyle={overlayTextStyle} />
        </div>
    </div>
)

export default Founder
