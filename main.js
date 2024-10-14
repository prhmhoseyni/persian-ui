const color = require("color");

const ThemeVariables = require("./config/theme-variables");

const base = require("./dist/base");
const components = require("./dist/components");
const utilities = require("./dist/utilities");

function PersianUI({config, addBase, addComponents, addUtilities}) {
    const LightThemeCustomConfig = config("persian-ui.themes.light") ?? {}
    const DarkThemeCustomConfig = config("persian-ui.themes.dark") ?? {}

    const LightTheme = {"color-scheme": "light"}
    const DarkTheme = {"color-scheme": "dark"}

    for (const [key, value] of Object.entries(ThemeVariables)) {
        LightTheme[`--${key}`] =  LightThemeCustomConfig[key]
            ? color(LightThemeCustomConfig[key]).rgb().array().join(", ")
            : color(value).rgb().array().join(", ");

        DarkTheme[`--${key}`] = DarkThemeCustomConfig[key]
            ? color(DarkThemeCustomConfig[key]).rgb().array().join(", ")
            : color(value).rgb().array().join(", ");
    }

    /**
     * @example box-sizing, font-family and ...
     */
    const baseConfig = {}

    baseConfig[":root"] = LightTheme
    baseConfig["html[data-theme=\"dark\"]"] = DarkTheme

    console.log(baseConfig)

    addBase({...baseConfig, ...base});
    addComponents(components);
    addUtilities(utilities);
}

module.exports = require("tailwindcss/plugin")(PersianUI, {
    theme: {
        extend: {
            colors: {
                "primary": "rgb(var(--primary))",
                "secondary": "rgb(var(--secondary))",
                "hint": "rgb(var(--hint))",
                "disabled": "rgb(var(--disabled))",
                "inverse": "rgb(var(--inverse))",
                "white": "rgb(var(--white))",
                "link": "rgb(var(--link))",

                "brand": "rgb(var(--brand))",
                "brand--hover": "rgb(var(--brand--hover))",
                "brand--active": "rgb(var(--brand--active))",
                "brand-light": "rgb(var(--brand-light))",
                "brand-light--hover": "rgb(var(--brand-light--hover))",
                "brand-light--active": "rgb(var(--brand-light--active))",

                "info": "rgb(var(--info))",
                "info--hover": "rgb(var(--info--hover))",
                "info--active": "rgb(var(--info--active))",
                "info-light": "rgb(var(--info-light))",
                "info-light--hover": "rgb(var(--info-light--hover))",
                "info-light--active": "rgb(var(--info-light--active))",

                "success": "rgb(var(--success))",
                "success--hover": "rgb(var(--success--hover))",
                "success--active": "rgb(var(--success--active))",
                "success-light": "rgb(var(--success-light))",
                "success-light--hover": "rgb(var(--success-light--hover))",
                "success-light--active": "rgb(var(--success-light--active))",

                "warning": "rgb(var(--warning))",
                "warning--hover": "rgb(var(--warning--hover))",
                "warning--active": "rgb(var(--warning--active))",
                "warning-light": "rgb(var(--warning-light))",
                "warning-light--hover": "rgb(var(--warning-light--hover))",
                "warning-light--active": "rgb(var(--warning-light--active))",

                "danger": "rgb(var(--danger))",
                "danger--hover": "rgb(var(--danger--hover))",
                "danger--active": "rgb(var(--danger--active))",
                "danger-light": "rgb(var(--danger-light))",
                "danger-light--hover": "rgb(var(--danger-light--hover))",
                "danger-light--active": "rgb(var(--danger-light--active))",

                "gray": "rgb(var(--gray))",
                "gray--hover": "rgb(var(--gray--hover))",
                "gray--active": "rgb(var(--gray--active))",
                "gray-light": "rgb(var(--gray-light))",
                "gray-light--hover": "rgb(var(--gray-light--hover))",
                "gray-light--active": "rgb(var(--gray-light--active))",

                "red": "rgb(var(--red))",
                "orange": "rgb(var(--orange))",
                "yellow": "rgb(var(--yellow))",
                "green": "rgb(var(--green))",
                "mint": "rgb(var(--mint))",
                "teal": "rgb(var(--teal))",
                "cyan": "rgb(var(--cyan))",
                "blue": "rgb(var(--blue))",
                "indigo": "rgb(var(--indigo))",
                "purple": "rgb(var(--purple))",
                "pink": "rgb(var(--pink))",
                "brown": "rgb(var(--brown))",
            },
            backgroundColor: {
                "primary": "rgb(var(--bg-primary))",
                "secondary": "rgb(var(--bg-secondary))",
                "menu": "rgb(var(--bg-menu))",
            }
        }
    }
})