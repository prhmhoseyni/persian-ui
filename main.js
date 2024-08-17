const ThemeVariables = require("./config/theme-variables");
const PrimitiveColors = require("./config/primitive-colors");

const base = require("./dist/base");
const components = require("./dist/components");
const utilities = require("./dist/utilities");

function DotinInterfaceGuide({config, addBase, addComponents, addUtilities}) {
    // const LightThemeCustomConfig = config("dig.themes.light") ?? {}
    // const DarkThemeCustomConfig = config("dig.themes.dark") ?? {}

    const LightTheme = {"color-scheme": "light"}
    const DarkTheme = {"color-scheme": "dark"}

    for (const [key, value] of Object.entries(ThemeVariables)) {
        // LightTheme[`--${key}`] = LightThemeCustomConfig[key] ?? PrimitiveColors.light[value];
        // DarkTheme[`--${key}`] = DarkThemeCustomConfig[key] ?? PrimitiveColors.dark[value];

        LightTheme[`--${key}`] = PrimitiveColors.light[value];
        DarkTheme[`--${key}`] = PrimitiveColors.dark[value];
    }

    // console.log(">>>>", LightTheme, DarkTheme);

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
                "link": "var(--link)",
                "white": "var(--white)",

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
            },
            backgroundColor: {
                "primary": "var(--bg-primary)",
                "secondary": "var(--bg-secondary)",
                "tertiary": "var(--bg-tertiary)",
                "dialog": "var(--bg-dialog)",
            }
        }
    }
})