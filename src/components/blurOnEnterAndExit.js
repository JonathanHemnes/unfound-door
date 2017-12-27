import React from 'react'
import { css } from 'glamor'

class BlurOnEnterAndExit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: props.element,
            count: 6,
            style: css({
                filter: 'blur(6px)'
            })        
        }
    }

    interval() {
        if (this.state.count !== -1) {
            this.setState({
                style: css({
                    filter: `blur(${this.state.count}px)`
                }),
                count: this.state.count - 1
            })
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.interval.bind(this), 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div {...this.state.style}>
                {this.state.element}
            </div>
        )
    }
}

export default BlurOnEnterAndExit
