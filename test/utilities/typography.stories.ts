import Typography, {TypographyVariant} from './typography';

export default {
    title: "utilities/Typography",
    tags: ["autodocs"],
    render: (args) => Typography(args),
    argTypes: {
        label: {
            control: "text"
        },
        variant: {
            control: {type: "select"},
            options: Object.keys(TypographyVariant),
        },
    },
};

export const Primary = {
    args: {
        variant: "heading1",
        label: "عنوان"
    },
};
