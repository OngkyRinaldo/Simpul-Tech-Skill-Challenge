/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Lato: ['Lato'],
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
            },
            height: {
                modalHeight: '737px',
            },
            width: {
                modalWidth: '734px',
            },
            padding: {
                paddingTopHomeSearch: '19px',
                paddingBottomHomeSearch: '23px',
                paddingLeftHomeSearch: '26px',
            },
            backgroundColor: {
                main: '#333',
            },
            colors: {
                main: '#333',
                primary: {
                    blue: '#2F80ED',
                    live: '#4F4F4F',
                    BattleshipGrey: '#828282',
                    LavenderPinocchio: '#E0E0E0',
                },
                indicator: {
                    Apricot: '#F8B76B',
                },
                chats: {
                    oasis: '#FCEED3',
                    indianYellow: '#E5A443',
                    lavenderMist: '#EEDCFF',
                    lavenderIndigo: '#9B51E0',
                    mintTulip: '#D2F2EA',
                    mint: '#43B78D',
                },
            },
        },
    },
    plugins: [],
};
