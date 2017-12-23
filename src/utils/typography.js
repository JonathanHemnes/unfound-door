import Typography from 'typography'

const typography = new Typography({
    scaleRatio: 3,
    headerFontFamily: ['Roboto', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'sans-serif'],
    googleFonts: [
        {
            name: 'Roboto',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ]
        }
    ]
})

export default typography
