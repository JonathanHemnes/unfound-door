import { css } from 'glamor'

const animations = {
    bounce: css.keyframes('bounce', {
        '0%': { transform: 'scale(0.8)', opacity: 1 },
        '60%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(0.8)' }
    })
}

export default animations
