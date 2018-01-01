import React from 'react'
import { css } from 'glamor'
import TitledHeadshot from './titledHeadshot.js'
import StyleStandards from '../styleStandards.js'
import BlurOnEnterAndExit from './blurOnEnterAndExit'

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
        const maxPossibleLogoArrayIndex = 5; 
        const maxPossiblePhotoIndex = this.state.teamHeadshots.edges.length - 1;
        const randomArrayIndex = this.getRandomIndex(maxPossibleLogoArrayIndex);
        const randomPhotoIndex = this.getRandomIndex(maxPossiblePhotoIndex)

        const newPhoto = this.state.teamHeadshots.edges[randomPhotoIndex];
        let newLogoArray = this.state.displayHeadshots;

        if(!this.isLogoAlreadyShown(newPhoto.node.childImageSharp.sizes.src)) {
            newLogoArray[randomArrayIndex] = newPhoto;
            this.setState({
                displayHeadshots: newLogoArray 
            }) 
        }
    }

    isLogoAlreadyShown(src) {
        return this.state.displayHeadshots.find(logo => logo.node.childImageSharp.sizes.src === src)
    }

    getRandomIndex(maxIndex) {
        return Math.floor(Math.random() * (maxIndex))
    }

    componentDidMount() {
        const randoTime = Math.random() * (4000 - 2000) + 2000;
        this.intervalId =  setInterval(this.interval.bind(this), randoTime)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
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
                            const element =  <TitledHeadshot key={file.node.childImageSharp.sizes.src} sizes={file.node.childImageSharp.sizes} name={getTeamMemberName(file.node.name)} title={getTeamMemberTitle(file.node.name)} /> 
                            return <BlurOnEnterAndExit key={file.node.childImageSharp.sizes.src} element={element} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default OurTeam
