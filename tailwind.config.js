
module.exports = {
    content: [
        './templates/**/*.twig',
        './src/css/*.css',
        './src/js/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
            },
        },
        extend: {
            colors: {
                'blue': {
                    900: '#253F84',
                    800: '#2747A6',
                    700: '#2568CB',
                    500: '#4D8FF3',
                    300: '#95C7FB',
                    100: '#EBF5F8'
                },
                'beige-100': '#F9F4EE',
                'orange': {
                    400: '#F99143',
                    100: '#FEF2E2'
                },
                'yellow': {
                    400: '#FFB70B',
                    300: '#FFD13F',
                    100: '#FFF9E1'
                },
                'purple': {
                    400: '#8D8BFA',
                    300: '#B5B7FD',
                    100: '#F1F2FF'
                },
                'pink': {
                    400: '#ED7F9C',
                    300: '#F9D2DC',
                    100: '#FDEDF0'
                }
            },
            fontSize: {
                'is-h1': '3.25rem',
                'is-h2': '2.75rem',
                'is-h3': '2.25rem',
                'is-h4': '1.75rem',
                'is-h5': '1.5rem',
                'is-h6': '1.125rem',
            },
            fontWeight: {
                "regular": "400",
                "semibold": "500",
                "bold": "700",
                "bolder": "800"
            },
            fontFamily: {
                "effra": ["Effra", "sans-serif"]
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0em',
                wide: '3px',
                heading: '2px',
            },
            boxShadow: {
                DEFAULT: '0 2px 8px rgba(37, 63, 132, 0.1)',
                'lg': '0px 2px 16px rgba(37, 63 , 132, 0.1)',
                'xl': '0px 4px 24px rgba(37, 63, 132, 0.2)',
                'input': '0 0 0 4px rgba(149, 199, 251, 0.3)'
            },
            borderRadius: {
                '4xl': '2.5rem'
            },
            zIndex: {
                'overlay': '80',
                'mobile-menu': '90',
                'header': '100',
                'scroll-to' : '999',
                'modal-overlay': '110',
                'modal-content': '120',
                'cp-edit': '1000'
            },
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1320px',
            '2xl': '1440px',
            '3xl': '1600px',
        }    
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
};
