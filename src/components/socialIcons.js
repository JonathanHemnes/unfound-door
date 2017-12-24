import React from 'react'
import { css } from 'glamor'
import FaIcon from './faIcon'

const iconContainer = css({
    height: '150px',
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: 'center'
})

const iconStyle = css({
    padding: '10px'
})

const icons = [
    {link: 'https://www.facebook.com/theunfounddoor', iconName: 'facebook-official', size: 'fa-3x'},
    {link: 'https://www.instagram.com/theunfounddoor/', iconName: 'instagram', size: 'fa-3x'},
    {link: 'https://www.youtube.com/channel/UC5byxo-QMxPd2S-jXDhIeeA', iconName: 'youtube', size: 'fa-3x'},
    {link: 'https://www.linkedin.com/in/ely-hemnes-47261a51/', iconName: 'linkedin', size: 'fa-3x'}
]

const SocialIcons = () => (
    <div {...iconContainer}>
        {icons.map((icon, i) => {
           return <FaIcon key={i} link={icon.link} iconName={icon.iconName} size={icon.size} style={iconStyle} />
        })}
    </div>
)

export default SocialIcons
