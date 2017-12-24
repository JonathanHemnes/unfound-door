import React from 'react'
import { css } from 'glamor'
import TitledHeadshot from './titledHeadshot.js'
import StyleStandards from '../styleStandards.js'

const headshotStyles = css({
    display: `flex`,
    flexDirection: `row`,
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px 20px 20px 20px'
})

const title = css({
    textAlign: `center`,
    marginTop: '20px'
})

function getTeamMemberName(fileName) {
    const parts = fileName.split('_');
    const firstName = parts[0];
    const lastName = parts[1];
    return `${firstName} ${lastName}`;
}

function getTeamMemberTitle(fileName){
    return fileName.split('_').slice(2).join(' ');
}

const OurTeam = props => {
    return (
        <div>
            <div {...title}>
                <h2>Our Team</h2>
            </div>
            <div {...headshotStyles}>
                {
                    props.teamHeadshots.edges.map((file, i) => {
                        return <TitledHeadshot key={i} sizes={file.node.childImageSharp.sizes} name={getTeamMemberName(file.node.name)} title={getTeamMemberTitle(file.node.name)} />
                    })
                }
            </div>
        </div>
    )
}

export default OurTeam
