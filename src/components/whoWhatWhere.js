import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import FaIcon from './faIcon'
import StyleStandards from '../styleStandards'

const container = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: StyleStandards.colors.grey,
    padding: '20px 0 20px 0'
})

const item = css({
    width: '300px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const faStyle = css({
    marginBottom: '10px'
})

const textStyle = css({
    textAlign: 'center',
    padding: '0 10px 0 10px'
})


const faSize = 'fa-3x'

const WhoWhatWhere = props => (
    <div {...container}>
        <div {...item}>
            <FaIcon size={faSize} iconName="users" style={faStyle} />
            <h3>Who</h3>
            <p {...textStyle}>{props.who}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="cogs" style={faStyle} />
            <h3>What</h3>
            <p {...textStyle}>{props.what}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="line-chart" style={faStyle} />
            <h3>Why</h3>
            <p {...textStyle}>{props.why}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="location-arrow" style={faStyle} />
            <h3>Where</h3>
            <p {...textStyle}>{props.where}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="comments-o" style={faStyle} />
            <h3>How</h3>
            <p {...textStyle}>{props.how}</p>
        </div>
    </div>
)

export default WhoWhatWhere

WhoWhatWhere.propTypes = {
    who: PropTypes.string.isRequired,
    what: PropTypes.string.isRequired,
    where: PropTypes.string.isRequired,
    why: PropTypes.string.isRequired,
    how: PropTypes.string.isRequired,
}

