module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        extend: {
            fontSize: {
                14: '14px',
            },
            backgroundColor: {
                'main-bg': '#FAFBFB',
                'main-dark-bg': '#20232A',
                'secondary-dark-bg': '#33373E',
                'light-gray': '#F7F7F7',
                'half-transparent': 'rgba(0, 0, 0, 0.5)',
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            width: {
                400: '400px',
                760: '760px',
                780: '780px',
                800: '800px',
                1000: '1000px',
                1200: '1200px',
                1400: '1400px',
            },
            height: {
                80: '80px',
            },
            minHeight: {
                590: '590px',
            },
            backgroundImage: {
                'hero-pattern':
                    "url('https://img.freepik.com/free-vector/e-wallet-money-transfer-concept-mobile-wallet-internet-banking-e-wallet-credit-card-mobile-app-accounting-investments-safe-online-internet-transaction-vector-illustration_1150-55440.jpg?w=900&t=st=1659544877~exp=1659545477~hmac=bbfdc4b892df8e1686f13eb2f93818b5f7aa3eb4af0d71b0422d5ca11b28e20e')",
            },
        },
    },
    plugins: [],
};