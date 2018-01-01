import React from 'react'
import { css } from 'glamor'
import Img from 'gatsby-image'
import BlurOnEnterAndExit from './blurOnEnterAndExit.js'

const logoArray = css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '175px',
})

const imageStyle = css({
    margin: '5px 5px 5px 5px',
    minWidth: '125px'
})

class PartnerLogos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            partnerLogos: props.partnerLogos,
            displayLogos: props.partnerLogos.edges.slice(0, 5)
        }
    }

    interval() {
        const maxPossibleLogoArrayIndex = 5; 
        const maxPossiblePhotoIndex = this.state.partnerLogos.edges.length - 1;
        const randomArrayIndex = this.getRandomIndex(maxPossibleLogoArrayIndex);
        const randomPhotoIndex = this.getRandomIndex(maxPossiblePhotoIndex)

        const newPhoto = this.state.partnerLogos.edges[randomPhotoIndex];
        let newLogoArray = this.state.displayLogos;

        if(!this.isLogoAlreadyShown(newPhoto.node.childImageSharp.sizes.src)) {
            newLogoArray[randomArrayIndex] = newPhoto;
            this.setState({
                displayLogos: newLogoArray 
            }) 
        }
    }

    isLogoAlreadyShown(src) {
        return this.state.displayLogos.find(logo => logo.node.childImageSharp.sizes.src === src)
    }

    getRandomIndex(maxIndex) {
        return Math.floor(Math.random() * (maxIndex + 1))
    }

    componentDidMount() {
        const randoTime = Math.random() * (4000 - 1000) + 1000;
        this.intervalId = setInterval(this.interval.bind(this), randoTime)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {

        return (
            <div {...logoArray}>
                {this.state.displayLogos.map((file, i) => {
                    const element = <Img sizes={file.node.childImageSharp.sizes} /> 
                    return (
                        <div key={file.node.childImageSharp.sizes.src} {...imageStyle}>
                            <BlurOnEnterAndExit element={element} />
                        </div>
                    )   
                })}
            </div>
        )
    }
}

export default PartnerLogos
