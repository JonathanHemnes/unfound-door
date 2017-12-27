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
        if (this.state.count !== this.state.partnerLogos.edges.length - 5) {
            this.setState({ count: this.state.count + 1 })
        } else {
            this.setState({count: 0})
        }

        this.setState({
            displayLogos: this.state.partnerLogos.edges.slice(this.state.count, this.state.count + 5)
        })
    }

    componentDidMount() {
        const randoTime = Math.random() * (5000 - 3000) + 3000;
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
