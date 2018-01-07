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
    padding: '20px 4% 20px 4%'
})

const header = css({
    paddingTop: 0
})

const item = css({
    flex: 1,
    minWidth: '200px',
    maxWidth: '500px',
    minHeight: '250px',
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

const uppercase = css({
    textTransform: 'uppercase'
})


const faSize = 'fa-3x'

const WhoWhatWhere = props => (
    <div {...container}>
        <div {...item}>
            <FaIcon size={faSize} iconName="users" style={faStyle} />
            <h3 {...uppercase} {...header}>Who</h3>
            <p {...textStyle} {...StyleStandards.paragraphSmall}>{props.who}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="cogs" style={faStyle} />
            <h3 {...uppercase}>What</h3>
            <p {...textStyle} {...StyleStandards.paragraphSmall}>{props.what}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="line-chart" style={faStyle} />
            <h3 {...uppercase}>Why</h3>
            <p {...textStyle} {...StyleStandards.paragraphSmall}>{props.why}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="location-arrow" style={faStyle} />
            <h3 {...uppercase}>Where</h3>
            <p {...textStyle} {...StyleStandards.paragraphSmall}>{props.where}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="comments-o" style={faStyle} />
            <h3 {...uppercase}>How</h3>
            <p {...textStyle} {...StyleStandards.paragraphSmall}>{props.how}</p>
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

