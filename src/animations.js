import { css } from 'glamor'

const animations = {
    bounce: css.keyframes('bounce', {
        '0%': { transform: 'scale(0.8)', opacity: 1 },
        '50%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(0.8)' }
    }),
    grow: css.keyframes('grow', {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.1)' }
    })
}

export default animations
