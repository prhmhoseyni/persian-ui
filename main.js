const ThemeVariables = require("./config/theme-variables");
const PrimitiveColors = require("./config/primitive-colors");

const base = require("./dist/base");
const components = require("./dist/components");
const utilities = require("./dist/utilities");

function DotinInterfaceGuide({config, addBase, addComponents, addUtilities}) {
    const LightThemeCustomConfig = config("dig.themes.light") ?? {}
    const DarkThemeCustomConfig = config("dig.themes.dark") ?? {}

    const LightTheme = {"color-scheme": "light"}
    const DarkTheme = {"color-scheme": "dark"}

    for (const [key, value] of Object.entries(ThemeVariables)) {
        LightTheme[`--${key}`] = LightThemeCustomConfig[key] ?? PrimitiveColors.light[value];
        DarkTheme[`--${key}`] = DarkThemeCustomConfig[key] ?? PrimitiveColors.dark[value];
    }

    console.log(">>>>", LightTheme, DarkTheme);

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
                "brand-light": "var(--brand-light)",

                "info": "var(--info)",
                "info-light": "var(--info-light)",

                "success": "var(--success)",
                "success-light": "var(--success-light)",

                "warning": "var(--warning)",
                "warning-light": "var(--warning-light)",

                "critical": "var(--critical)",
                "critical-light": "var(--critical-light)",
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