import Typography from 'typography'

const typography = new Typography({
    scaleRatio: 2.5,
    baseFontSize: '24px',
    headerWeight: '200',
    headerFontFamily: ['Raleway', 'sans-serif'],
    bodyFontFamily: ['Raleway', 'sans-serif'],
    googleFonts: [
        {
            name: 'Raleway',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ]
        }
    ]
})

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
