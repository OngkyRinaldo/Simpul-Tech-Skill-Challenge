/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                main: '#333',
            },
            colors: {
                primary: {
                    blue: '#2F80ED',
                    live: '#4F4F4F',
                    BattleshipGrey: '#828282',
                    LavenderPinocchio: '#E0E0E0',
                },
                indicator: {
                    Apricot: '#F8B76B',
                },
            },
        },
    },
    plugins: [],
};
