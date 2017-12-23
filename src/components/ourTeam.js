import React from 'react'
import { css } from 'glamor'
import TitledHeadshot from './titledHeadshot.js'
import grahamHeadshot from '../img/MainPhotographyHeader.jpg'
import kristinHeadshot from '../img/MainPhotographyHeader.jpg'
import kylaHeadshot from '../img/MainPhotographyHeader.jpg'
import joshHeadshot from '../img/MainPhotographyHeader.jpg'
import katieHeadshot from '../img/MainPhotographyHeader.jpg'

const headshotStyles = css({
    display: `flex`,
    flexDirection: `row`
})

const title = css({
    textAlign: `center`
})

const graham = {
    src: grahamHeadshot,
    name: `Graham Johnstone`,
    title: `Videographer`
}

const kristin = {
    src: kristinHeadshot,
    name: `Kristin Olson`,
    title: `Photographer`
}
const kyla = {
    src: kylaHeadshot,
    name: `Kyla Fear`,
    title: `Photographer`
}
const josh = {
    src: joshHeadshot,
    name: `Josh Thill`,
    title: `Wordpress Dev`
}
const katie = {
    src: katieHeadshot,
    name: `Katie Baechler`,
    title: `Photographer`
}

const team = [graham, kristin, kyla, josh, katie]

const OurTeam = props => (
    <div>
        <div {...title}>
            <h2>Our Team</h2>
        </div>
        <div {...headshotStyles}>
            {
                team.map((member, i) => {
                    return <TitledHeadshot key={i} src={member.src} name={member.name} title={member.title} />
                })
            }
        </div>
    </div>
)

export default OurTeam
