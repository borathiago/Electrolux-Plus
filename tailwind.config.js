/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './src/**/*.js',
        './src/index.html'
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'electrolux-gray': {
                    100: 'rgba(223, 231, 234, 1)',
                    200: 'rgba(173, 185, 195, 1)',
                    300: 'rgba(123, 138, 156, 1)',
                    400: 'rgba(119, 139, 158, 1)',
                },
                'electrolux-blue': {
                    900: 'rgba(1, 30, 65, 1)',
                }
            },
            fontFamily: {
                'sans': ['"Electrolux Sans"', ...defaultTheme.fontFamily.sans]
            },
            aspectRatio: {
                'video-horizontal-half': '9 / 4'
            },
        },
        screens: {
            android: '389px',
            mobile: '640px',
            smartphone: '768px',
            tablet: '980px',
            'small-desktop': '1024px',
            desktop: '1280px',
            'standard-desktop': '1366px',
            'large-desktop': '1600px',
            'huge-desktop': '1920px',
        },
        fontSize: {
            '8.125x': '8.125rem',
            '7.225x': '7.225rem',
            '6.875x': '6.875rem',
            '6.125x': '6.125rem',
            '6x': '6rem',
            '5.875x': '5.875rem',
            '5.75x': '5.75rem',
            '5.5x': '5.5rem',
            '5.25x': '5.25rem',
            '5.125x': '5.125rem',
            '5x': '5rem',
            '4.875x': '4.875rem',
            '4.75x': '4.75rem',
            '4.5x': '4.5rem',
            '4.375x': '4.375rem',
            '4.25x': '4.25rem',
            '4.125x': '4.125rem',
            '4x': '4rem',
            '3.75x': '3.75rem',
            '3.5x': '3.5rem',
            '3.25x': '3.25rem',
            '3.125x': '3.125rem',
            '3.1x': '3.1rem',
            '3x': '3rem',
            '2.875x': '2.875rem',
            '2.75x': '2.75rem',
            '2.675x': '2.675rem',
            '2.5x': '2.5rem',
            '2.365x': '2.365rem',
            '2.25x': '2.25rem',
            '2.125x': '2.125rem',
            '2x': '2rem',
            '1.875x': '1.875rem',
            '1.75x': '1.75rem',
            '1.675x': '1.675rem',
            '1.5x': '1.5rem',
            '1.25x': '1.25rem',
            '1x': '1rem',
            '0.75x': '0.75rem',
            '0.5x': '0.5rem',
        }
    },
    plugins: [
        plugin(function({ addComponents }) {
            addComponents({
                '#main': {
                    maxWidth: '1920px',
                    overflowX: 'hidden',
                },
                '.container': {
                    width: '100%',
                    maxWidth: '1920px',
                    overflowX: 'hidden',
                },
                '.normal-word-spacing': {
                    wordSpacing: '0.2rem !important',
                    letterSpacing: 'normal !important'
                },
                '.electrolux-light': {
                    fontFamily: 'Electrolux Sans Light',
                    fontStyle: 'normal',
                    fontWeight: '200',
                },
                '.electrolux-light-oblique': {
                    fontFamily: 'Electrolux Sans Light Oblique',
                    fontStyle: 'oblique',
                    fontWeight: '200',
                },
                '.electrolux-bold': {
                    fontFamily: 'Electrolux Sans Bold',
                    fontStyle: 'normal',
                    fontWeight: '700',
                },
                '.electrolux-bold-oblique': {
                    fontFamily: 'Electrolux Sans Bold Oblique',
                    fontStyle: 'oblique',
                    fontWeight: '700',
                },
                '.image-hidden-mobile-shown-desktop': {
                    display: 'none',
                    opacity: '0',
                    width: '0',
                    height: '0',
                    '@media (min-width: 980px)': {
                        display: 'block !important',
                        opacity: '1 !important',
                        width: '100% !important',
                        height: 'auto !important'
                    }
                },
                '.image-hidden-desktop-shown-mobile': {
                    display: 'block',
                    opacity: '1',
                    width: '100%',
                    height: 'auto',
                    '@media (min-width: 980px)': {
                        display: 'none !important',
                        opacity: '0 !important',
                        width: '0 !important',
                        height: '0 !important'
                    }
                }
            })
        })
    ]
}
