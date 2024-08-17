/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
    stories: [
        // "../stories/**/*.mdx",
        "../test/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
    ],
    framework: {
        name: "@storybook/web-components-webpack5",
        options: {},
    },
};
export default config;
