/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [require("./main")],
    "persian-ui": {
        darkMode: "auto",
        themes: {
            light: {
                "brand": "#24af85"
            },
            dark: {
                "brand": "#24af85"
            },
        },
    },
};