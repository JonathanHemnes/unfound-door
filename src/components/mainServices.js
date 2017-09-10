import React from 'react'
import { css } from 'glamor'
import PhotoLink from './photoLink'
import headerPhoto from '../img/PhotographyHeader2-TheUnfoundDoor.jpg'

const photoArray = css({
    display: `flex`,
    flexDirection: `row`
  })

const MainServices = () => (
    <div {...photoArray}>
        <PhotoLink to={'/'} src={headerPhoto} text={'Photography'} />
        <PhotoLink to={'/'} src={headerPhoto} text={'Videography'} />
        <PhotoLink to={'/'} src={headerPhoto} text={'Design & Strategy'} />
    </div>
)

export default MainServices