import React from 'react'
import { css } from 'glamor'
import logo from '../img/TUD_logo_black.png'

const Address = () => (
    <div>
        <img src={logo} />
        <p>Denver, CO</p>
        <a href={'mailto:ely@theunfounddoor.com'}>ely@theunfounddoor.com</a>
        <a href={'tel:6177759911'}>617-775-9911</a>
    </div>
)

export default Address