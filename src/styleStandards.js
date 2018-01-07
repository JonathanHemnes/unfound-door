import { css } from 'glamor'

const colors = {
        white: `white`,
        red: `red`,
        black: `black`,
        grey: `rgb(158, 162, 168)`
}
const StyleStandards = {
    colors,
    sizes: {
        sm: `400px`,
        md: `900px`,
        lg: `1200px`
    },
    animations: {
        greyHover: {
            ':hover': {
                transition: `color 0.5s ease`,
                color: colors.grey
            }
        },
        greyHoverBackground: {
            ':hover': {
                transition: `background-color 0.5s ease`,
                backgroundColor: colors.grey
            }
        }
    },
    paragraphSmall: css({
        fontSize: '16px',
        lineHeight: 1.5
    }),
    uppercase: css({
        textTransform: 'uppercase'
    }),
    noBottomMargin: css({
        marginBottom: 0
    }),
    marginTop: css({
        marginTop: '75px'
    }),
    marginBottom: css({
        marginBottom: '75px'
    })
}

export default StyleStandards
