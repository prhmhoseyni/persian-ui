import Checkbox from './checkbox';

export default {
    title: "components/Checkbox",
    tags: ["autodocs"],
    render: (args) => Checkbox(args),
    argTypes: {
        // checked: {
        //     control: { type: "boolean" },
        // },
        disabled: {
            control: { type: "boolean" },
        },
        indeterminate: {
            control: { type: "boolean" },
        },
    }
};

export const Primary = {
    args: {},
};

