import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import Splash from '../components/splash'
import expertiseLogo from '../img/header/expertise.jpg'
import StrategicPartnership from '../components/strategicPartnership'

const Expertise = props => (
    <div>
    <Splash src={expertiseLogo} />
    <div>
      <StrategicPartnership />
  </div>
  </div>
)

export default Expertise