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
        <PhotoLink to={'/photography'} src={headerPhoto} text={'Photography'} alt="Man standing between columns" />
        <PhotoLink to={'/videography'} src={videographyPhoto} text={'Videography'} alt="People reviewing documents" />
        <PhotoLink to={'/design-strategy'} src={designStrategyPhoto} text={'Design & Strategy'} alt="Notebook with pen next to it" />
    </div>
)

export default MainServices
