import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import expertiseLogo from '../img/header/expertise.jpg'
import StrategicPartnership from '../components/strategicPartnership'
import MainServices from '../components/mainServices'
import ImportantClients from '../components/importantClients'

const center = css({
  textAlign: 'center'
})

const Expertise = props => (
  <div>
    <Splash src={expertiseLogo} />
    <div> 
      <h2 {...center}>Our Expertise</h2>
      <MainServices />
      <ImportantClients />
    </div>
    <StrategicPartnership />
  </div>
)

export default Expertise