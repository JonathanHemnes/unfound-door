import React from 'react'
import { css } from 'glamor'
import PhotoLink from './photoLink'
import headerPhoto from '../img/MainPhotographyHeader.jpg'
import videographyPhoto from '../img/MainVideographyPhoto.jpg'
import designStrategyPhoto from '../img/DesignStrategyThumbnailHeader.jpg'

const photoArray = css({
    display: `flex`,
    flexDirection: `row`,
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  })

const MainServices = () => (
    <div {...photoArray}>
        <PhotoLink to={'/'} src={headerPhoto} text={'Photography'} />
        <PhotoLink to={'/'} src={videographyPhoto} text={'Videography'} />
        <PhotoLink to={'/'} src={designStrategyPhoto} text={'Design & Strategy'} />
    </div>
)

export default MainServices
