const Color = require("color");

const base = require("./dist/base");
const components = require("./dist/components");
const utilities = require("./dist/utilities");
const { colors, backgroundColor } = require("./config/theme.config");

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: helpers methods ::::
 */
function formatColor(_color) {
    return Color(_color).rgb().color.join(", ");
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: persian ui ::::
 */
function PersianUI({ config, addBase, addComponents, addUtilities }) {
    console.log("\n")
    console.log("██████╗ ███████╗██████╗ ███████╗██╗ █████╗ ███╗   ██╗    ██╗   ██╗██╗")
    console.log("██╔══██╗██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗  ██║    ██║   ██║██║")
    console.log("██████╔╝█████╗  ██████╔╝███████╗██║███████║██╔██╗ ██║    ██║   ██║██║")
    console.log("██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██║██╔══██║██║╚██╗██║    ██║   ██║██║")
    console.log("██║     ███████╗██║  ██║███████║██║██║  ██║██║ ╚████║    ╚██████╔╝██║")
    console.log("╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚═════╝ ╚═╝")
    console.log("\n")

    const darkMode = config("persian-ui.darkMode") ?? null;
    const CustomConfigLightTheme = config("persian-ui.themes.light") ?? {};
    const CustomConfigDarkTheme = config("persian-ui.themes.dark") ?? {};

    const LightTheme = { "color-scheme": "light" };
    const DarkTheme = { "color-scheme": "dark" };

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: LIGHT THEME GENERIC VARIABLES::::
     */
    LightTheme["--persian-ui-bg-body"] = "245, 245, 245";
    LightTheme["--persian-ui-bg-paper"] = "255, 255, 255";
    LightTheme["--persian-ui-bg-dialog"] = "255, 255, 255";
    LightTheme["--persian-ui-bg-inverse"] = "0, 0, 0";

    LightTheme["--persian-ui-text-primary"] = "12, 14, 16";
    LightTheme["--persian-ui-text-secondary"] = "102, 117, 133";
    LightTheme["--persian-ui-text-hint"] = "154, 166, 177";
    LightTheme["--persian-ui-text-disabled"] = "154, 166, 177";
    LightTheme["--persian-ui-text-inverse"] = "246, 247, 248";
    LightTheme["--persian-ui-text-white"] = "255, 255, 255";
    LightTheme["--persian-ui-text-link"] = "32, 156, 215";

    LightTheme["--persian-ui-brand"] = CustomConfigLightTheme["brand"] ? formatColor(CustomConfigLightTheme["brand"]) : "62, 136, 193";
    LightTheme["--persian-ui-info"] = "45, 144, 210";
    LightTheme["--persian-ui-success"] = "21, 151, 84";
    LightTheme["--persian-ui-warning"] = "208, 124, 6";
    LightTheme["--persian-ui-danger"] = "197, 50, 17";
    LightTheme["--persian-ui-grey"] = "39, 41, 55";

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: LIGHT THEME DESIGN TOKENS ::::
     */
    LightTheme["--persian-ui-border-alpha"] = "14%";

    LightTheme["--persian-ui-color-mix-text"] = "#000000 35%";

    LightTheme["--persian-ui-color-mix-hover"] = "#000000 10%";
    LightTheme["--persian-ui-color-mix-active"] = "#000000 15%";

    LightTheme["--persian-ui-color-mix-light"] = "#FFFFFF 90%";
    LightTheme["--persian-ui-color-mix-light-hover"] = "#FFFFFF 85%";
    LightTheme["--persian-ui-color-mix-light-active"] = "#FFFFFF 80%";

    LightTheme["--persian-ui-color-mix-grey"] = "#FFFFFF";

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: DARK THEME GENERIC VARIABLES::::
     */
    if (darkMode) {
        DarkTheme["--persian-ui-bg-body"] = "18, 18, 18";
        DarkTheme["--persian-ui-bg-paper"] = "31, 31, 31";
        DarkTheme["--persian-ui-bg-dialog"] = "45, 45, 45";
        DarkTheme["--persian-ui-bg-inverse"] = "255, 255, 255";

        DarkTheme["--persian-ui-text-primary"] = "244, 244, 244";
        DarkTheme["--persian-ui-text-secondary"] = "179, 179, 179";
        DarkTheme["--persian-ui-text-hint"] = "109, 109, 109";
        DarkTheme["--persian-ui-text-disabled"] = "109, 109, 109";
        DarkTheme["--persian-ui-text-inverse"] = "40, 40, 40";
        DarkTheme["--persian-ui-text-white"] = "255, 255, 255";
        DarkTheme["--persian-ui-text-link"] = "45, 144, 210";

        DarkTheme["--persian-ui-brand"] = CustomConfigDarkTheme["brand"] ? formatColor(CustomConfigDarkTheme["brand"]) : "62, 136, 193";
        DarkTheme["--persian-ui-info"] = "45, 144, 210";
        DarkTheme["--persian-ui-success"] = "21, 151, 84";
        DarkTheme["--persian-ui-warning"] = "208, 124, 6";
        DarkTheme["--persian-ui-danger"] = "197, 50, 17";
        DarkTheme["--persian-ui-grey"] = "244, 244, 244";

        /**
         * -------------------------------------------------------------------------------------------------------------
         * :::: DARK THEME DESIGN TOKENS ::::
         */
        DarkTheme["--persian-ui-border-alpha"] = "14%";

        DarkTheme["--persian-ui-color-mix-text"] = "#FFFFFF 35%";

        DarkTheme["--persian-ui-color-mix-hover"] = "#FFFFFF 10%";
        DarkTheme["--persian-ui-color-mix-active"] = "#FFFFFF 15%";

        DarkTheme["--persian-ui-color-mix-light"] = "#000000 90%";
        DarkTheme["--persian-ui-color-mix-light-hover"] = "#000000 85%";
        DarkTheme["--persian-ui-color-mix-light-active"] = "#000000 80%";

        DarkTheme["--persian-ui-color-mix-grey"] = "#000000";
    }

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: CONFIG PALETTE VARIABLES ::::
     */
    const baseConfig = {};

    baseConfig[":root"] = LightTheme;

    if (darkMode) {
        if (darkMode === "auto") {
            const darkConfig = {};
            darkConfig[":root"] = DarkTheme;
            baseConfig["@media (prefers-color-scheme: dark)"] = darkConfig;
        } else {
            baseConfig["html.dark"] = DarkTheme;
        }
    }

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: ADD UI MODULES ::::
     */
    addBase({ ...baseConfig, ...base });
    addComponents(components);
    addUtilities(utilities);
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: export default ::::
 */
module.exports = require("tailwindcss/plugin")(PersianUI, {
    theme: {
        extend: {
            colors,
            backgroundColor,
        },
    },
});