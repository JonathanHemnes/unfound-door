import React from 'react'
import { css } from 'glamor'
import logo from '../img/TUD_logo_black.png'

const container = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px',
    paddingTop: '20px',
    paddingBottom: '15px'
})

const anchor = css({
    textDecoration: 'none'
})

const logoStyle = css({
    fontSize: '28px'
})

const noBottomPad = css({
    marginBottom: 0
})

const Address = () => (
    <div {...container}>
        <div>
            <p {...logoStyle} {...noBottomPad}>THE<strong>UNFOUND</strong>DOOR</p>
            <p {...noBottomPad}>Denver, Colorado</p>
            <div>
                <a href={'mailto:ely@theunfounddoor.com'} {...anchor} {...noBottomPad}>ely@theunfounddoor.com</a>
            </div>
            <div>
                <a href={'tel:6177759911'} {...anchor} {...noBottomPad}>617-775-9911</a>
    </div>
        </div>
    </div>
)

export default Address
