import React from 'react'
import { css } from 'glamor'
import StyleStandards from '../styleStandards'

const CustomerReviews = props => {

    const container = css({
        margin: '75px 4% 75px 4%',
        '@media(max-width: 540px)': {
            margin: '75px 1% 75px 1%',
        }
    })

    const reviewContainer = css({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:  'space-around',
    });

    const smallText = StyleStandards.paragraphSmall

    const reviewBox = css({
        width: '22vw',
        minWidth: '250px',
        maxWidth: '500px',
        padding: '15px',
        '@media(max-width: 540px)': {
            width: '90vw'
        }
    });

    const header = css({
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '25px',
        marginBottom: '10px'
    })

    const smallerFontOnSmallScreen = css({
        '@media(max-width: 400px)': {
            fontSize: '2rem'
        }
    })

    const reviews = [{
        text: 'GE Johnson engaged The Unfound Door to help us cel- ebrate our 50th Anniversary and capture the momentous occasion. Our photographer was extremely easy to work with, professional, understood our mission, and captured our celebration perfectly. We will no doubt use their services again. They did not disappoint, in fact, they delivered much more than we could have ever anticipated.',
        source: 'Michelle K., GE Johnson'
    },{
        text: 'I engaged The Unfound Door to shoot both my professional head-shots and stock imagery for the re-design of my web- site. They went out of their way to make sure we captured all the different types of shots we had originally discussed and displayed their creativity in suggesting various angles and backgrounds for photos. They were great to work with and I appreciated their level of professionalism and positivity.',
        source: 'Julie W., Business Rewritten'
    }, {
        text: 'Ely and her team are great to work with! We have used them a few times to shoot various construction projects and have received quality images with quick turn-around. Ely and her team take care to make sure we get the shots that not only help us but also our clients!',
        source: 'Jessica N., Pinkard Construction'
    }, {
        text: 'They are so amazing to work with! Totally made me feel like a movie star for a morning, and the head shots turned out amazing.',
        source: 'Conor R.'
    }]



    return (
        <div {...container}>
            <h1 {...header} {...smallerFontOnSmallScreen}>People Say The Nicest Things!</h1>
            <div {...reviewContainer}>
                {reviews.map(( review, idx ) => {
                    return (
                        <div {...reviewBox} key={idx}>
                            <p {...smallText}>"{review.text}"<br /> - {review.source}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CustomerReviews
