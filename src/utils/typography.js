import Typography from 'typography'

const typography = new Typography({
    scaleRatio: 3,
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

export default typography
