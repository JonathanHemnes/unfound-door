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

class OurTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            teamHeadshots: props.teamHeadshots,
            displayHeadshots: props.teamHeadshots.edges.slice(0,5) 
        }
    }

    interval() {
        if (this.state.count !== this.state.teamHeadshots.edges.length - 5) {
            this.setState({ count: this.state.count + 1 })
        } else {
            this.setState({count: 0})
        }

        this.setState({
            displayHeadshots: this.state.teamHeadshots.edges.slice(this.state.count, this.state.count + 5)
        })
    }
    componentDidMount() {
        const randoTime = Math.random() * (5000 - 3000) + 3000;
        setInterval(this.interval.bind(this), randoTime)
    }

    render() {

        return (
            <div>
                <div {...title}>
                    <h2>Our Team</h2>
                </div>
                <div {...headshotStyles}>
                    {
                        this.state.displayHeadshots.map((file, i) => {
                            return <TitledHeadshot key={file.node.childImageSharp.sizes.src} sizes={file.node.childImageSharp.sizes} name={getTeamMemberName(file.node.name)} title={getTeamMemberTitle(file.node.name)} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default OurTeam
