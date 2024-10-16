import Btn, {BtnColor, BtnSize, BtnVariant} from './btn';

export default {
    title: "components/Button",
    tags: ["autodocs"],
    render: (args) => Btn(args),
    argTypes: {
        label: {
            control: "text"
        },
        variant: {
            control: {type: "select"},
            options: Object.keys(BtnVariant),
        },
        color: {
            control: {type: "select"},
            options: Object.keys(BtnColor),
        },
        size: {
            control: {type: "select"},
            options: Object.keys(BtnSize),
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
    args: {
        label: "فشارم بده",
    },
};

