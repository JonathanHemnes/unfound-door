import React from 'react'
import { css } from 'glamor'

const CustomerReviews = props => {
    const reviewContainer = css({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:  'space-around'
    });

    const reviewBox = css({
        width: '25vw',
        minWidth: '250px',
        maxWidth: '500px',
        padding: '15px'
    });

    const header = css({
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '25px'
    })


    return (
        <div>
            <h2 {...header}>People Say The Nicest Things!</h2>
            <div {...reviewContainer}>
                {props.reviews.map(( review, idx ) => {
                    return (
                        <div {...reviewBox} key={idx}>
                            <p>"{review.text}"<br /> - {review.source}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CustomerReviews
