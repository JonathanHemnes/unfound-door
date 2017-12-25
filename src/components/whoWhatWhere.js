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
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})


const faSize = 'fa-3x'

const WhoWhatWhere = props => (
    <div {...container}>
        <div {...item}>
            <FaIcon size={faSize} iconName="users" />
            <h3>Who</h3>
            <p>{props.who}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="cogs" />
            <h3>What</h3>
            <p>{props.what}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="line-chart" />
            <h3>Why</h3>
            <p>{props.why}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="location-arrow" />
            <h3>Where</h3>
            <p>{props.where}</p>
        </div>
        <div {...item}>
            <FaIcon size={faSize} iconName="comments-o" />
            <h3>How</h3>
            <p>{props.how}</p>
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

