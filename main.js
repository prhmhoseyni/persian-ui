const color = require("color");

const ThemeVariables = require("./config/theme-variables");

const base = require("./dist/base");
const components = require("./dist/components");
const utilities = require("./dist/utilities");

function DotinInterfaceGuide({config, addBase, addComponents, addUtilities}) {
    // const LightThemeCustomConfig = config("dig.themes.light") ?? {}
    // const DarkThemeCustomConfig = config("dig.themes.dark") ?? {}

    const LightTheme = {"color-scheme": "light"}
    const DarkTheme = {"color-scheme": "dark"}

    for (const [key, value] of Object.entries(ThemeVariables)) {
        LightTheme[`--${key}`] = color(value).rgb().array().join(", ");
        DarkTheme[`--${key}`] = color(value).rgb().array().join(", ");
    }

    /**
     * @example box-sizing, font-family and ...
     */
    const baseConfig = {}

    baseConfig[":root"] = LightTheme
    baseConfig["html.dark"] = DarkTheme

    addBase({...baseConfig, ...base});
    addComponents(components);
    addUtilities(utilities);
}


module.exports = require("tailwindcss/plugin")(DotinInterfaceGuide, {
    theme: {
        extend: {
            colors: {
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "hint": "var(--hint)",
                "disabled": "var(--disabled)",
                "inverse": "var(--inverse)",
                "white": "var(--white)",
                "link": "var(--link)",

                "brand": "var(--brand)",
                "brand--hover": "var(--brand--hover)",
                "brand--active": "var(--brand--active)",
                "brand-light": "var(--brand-light)",
                "brand-light--hover": "var(--brand-light--hover)",
                "brand-light--active": "var(--brand-light--active)",

                "info": "var(--info)",
                "info--hover": "var(--info--hover)",
                "info--active": "var(--info--active)",
                "info-light": "var(--info-light)",
                "info-light--hover": "var(--info-light--hover)",
                "info-light--active": "var(--info-light--active)",

                "success": "var(--success)",
                "success--hover": "var(--success--hover)",
                "success--active": "var(--success--active)",
                "success-light": "var(--success-light)",
                "success-light--hover": "var(--success-light--hover)",
                "success-light--active": "var(--success-light--active)",

                "warning": "var(--warning)",
                "warning--hover": "var(--warning--hover)",
                "warning--active": "var(--warning--active)",
                "warning-light": "var(--warning-light)",
                "warning-light--hover": "var(--warning-light--hover)",
                "warning-light--active": "var(--warning-light--active)",

                "danger": "var(--danger)",
                "danger--hover": "var(--danger--hover)",
                "danger--active": "var(--danger--active)",
                "danger-light": "var(--danger-light)",
                "danger-light--hover": "var(--danger-light--hover)",
                "danger-light--active": "var(--danger-light--active)",

                "gray": "var(--gray)",
                "gray--hover": "var(--gray--hover)",
                "gray--active": "var(--gray--active)",
                "gray-light": "var(--gray-light)",
                "gray-light--hover": "var(--gray-light--hover)",
                "gray-light--active": "var(--gray-light--active)",

                "red": "var(--red)",
                "orange": "var(--orange)",
                "yellow": "var(--yellow)",
                "green": "var(--green)",
                "mint": "var(--mint)",
                "teal": "var(--teal)",
                "cyan": "var(--cyan)",
                "blue": "var(--blue)",
                "indigo": "var(--indigo)",
                "purple": "var(--purple)",
                "pink": "var(--pink)",
                "brown": "var(--brown)",
            },
            backgroundColor: {
                "primary": "var(--bg-primary)",
                "secondary": "var(--bg-secondary)",
                "menu": "var(--bg-menu)",
            }
        }
    }
})