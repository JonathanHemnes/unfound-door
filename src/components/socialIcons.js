import React from 'react'
import { css } from 'glamor'
import FaIcon from './faIcon'

const iconContainer = css({
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `space-between`
})

const icons = [
    {link: 'http://google.com', iconName: 'facebook-official', size: 'fa-3x'},
    {link: 'http://google.com', iconName: 'instagram', size: 'fa-3x'},
    {link: 'http://google.com', iconName: 'youtube', size: 'fa-3x'},
    {link: 'http://google.com', iconName: 'google', size: 'fa-3x'},
    {link: 'http://google.com', iconName: 'linkedin', size: 'fa-3x'},
    {link: 'http://google.com', iconName: 'pinterest', size: 'fa-3x'},
]

const SocialIcons = () => (
    <div {...iconContainer}>
        {icons.map((icon, i) => {
           return <FaIcon key={i} link={icon.link} iconName={icon.iconName} size={icon.size} />
        })}
    </div>
)

export default SocialIcons