import React from 'react'
import { css } from 'glamor'
import rightPhoto from '../img/Founder_Tagline_Photo_TheUnfoundDoor.jpg'
import PhotoWithTextOverlay from './photoWithTextOverlay'
import Img from 'gatsby-image'
import StyleStandards from '../styleStandards'

const container = css({
    padding: '75px 0 75px 0'
})

const header = css({
    textAlign: `center`,
    marginLeft: '4%',
    marginRight: '4%'
})
const photos = css({
    display: `flex`,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    '@media(min-width: 1082px)': {
        height: '348px',
        overflow: 'hidden'
    }
})

const leftPhotoStyle = css({
    width: '560px',
    '@media(max-width: 1082px)': {
        width: '100%'
    }
})

const rightPhotoStyle = css({
    flex: 1,
    minWidth: '360px'
})

const overlayTextStyle = css({
    color: `white`,
    fontSize: '18px',
    width: '134%',
    fontSize: '16px',
    lineHeight: 1.5
})

const overlayText = '\"I want to live in a world where hot air balloon travel is the only option, calories don’t lead to weight gain and people spontaneously break out into song and dance at least once a day. My name is Ely, pronounced Ellie, and plot twist: I am not a natural redhead.\"';

const Founder = (props) => (
    <div {...container}>
        <div {...header}>
            <h1>CEO & FOUNDER</h1>
            <p>CEO of THE<strong>UNFOUND</strong>DOOR and Account Manager of client projects, Ely Hemnes is our client’s primary contact for communication, organization, and logistical support. Her skills include building top-notch teams, constructing frameworks for artistic professionals, aiding clients in curating vision, internal & external strategy, translating client’s vision to technical staff, and managing timelines. Ely is also the quality assurance to assess product before delivery to client.</p>
        </div>
        <div {...photos}>
            <div {...leftPhotoStyle}>
                <Img sizes={props.img.sizes} />
            </div>
            <div {...rightPhotoStyle}>
                <PhotoWithTextOverlay src={rightPhoto} text={overlayText} textStyle={overlayTextStyle} />
            </div>
        </div>
    </div>
)

export default Founder
