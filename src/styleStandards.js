import { css } from 'glamor'

const colors = {
    white: `#fffff0`,
    red: `red`,
    black: `black`,
    grey: `rgb(158, 162, 168)`,
    yellow: `#f2e12e`
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
        yellowHover: {
            ':hover': {
                transition: `color 0.5s ease`,
                color: colors.yellow
            }
        },
        greyHoverBackground: {
            ':hover': {
                transition: `background-color 0.5s ease`,
                backgroundColor: colors.grey
            }
        },
        yellowHoverBackground: {
            ':hover': {
                transition: `background-color 0.5s ease`,
                backgroundColor: colors.yellow
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
