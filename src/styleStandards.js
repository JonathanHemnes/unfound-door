const colors = {
        white: `white`,
        red: `red`,
        black: `black`,
        grey: `rgb(208, 213, 221)`
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
    }
}

export default StyleStandards
