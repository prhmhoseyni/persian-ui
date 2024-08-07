/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
    },
    plugins: [require("./main")],
    dig: {
        themes: {
            light: {
                "brand": "#24af85",
                "brand-light": "#e9f7f3",
            },
            dark: {
                "brand": "#11503d",
                "brand-light": "#022c20",
            }
        }
    }
}

module.exports = tailwindConfig;

