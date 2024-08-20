import IconButton, {IconButtonColor, IconButtonSize, IconButtonVariant} from './icon-btn';

export default {
    title: "components/Icon Button",
    tags: ["autodocs"],
    render: (args) => IconButton(args),
    argTypes: {
        variant: {
            control: {type: "select"},
            options: Object.keys(IconButtonVariant),
        },
        color: {
            control: {type: "select"},
            options: Object.keys(IconButtonColor),
        },
        size: {
            control: {type: "select"},
            options: Object.keys(IconButtonSize),
        },
        roundedFull: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
};

export const Primary = {
    args: {},
};

