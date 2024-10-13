/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
    content: [
        "./src/**/*.{html,js,ts}",
        "./stories/**/*.{html,js,ts}",
        "./test/**/*.{html,js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("./main")],
    "persian-ui": {
        themes: {
            light: {
                "brand": "#24af85",
                "brand--hover": "#209e78",
                "brand--active": "#1d8c6a",
                "brand-light": "#e9f7f3",
                "brand-light--hover": "#def3ed",
                "brand-light--active": "#bbe6d9",
            },
            dark: {
                "brand": "#24af85",
                "brand--hover": "#209e78",
                "brand--active": "#1d8c6a",
                "brand-light": "#e9f7f3",
                "brand-light--hover": "#def3ed",
                "brand-light--active": "#bbe6d9",
            }
        }
    }
}

module.exports = tailwindConfig;

