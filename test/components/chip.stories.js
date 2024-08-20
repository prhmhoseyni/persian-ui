import Chip, {ChipColor, ChipSize, ChipVariant} from './chip';

export default {
    title: "components/Chip",
    tags: ["autodocs"],
    render: (args) => Chip(args),
    argTypes: {
        label: {
            control: "text"
        },
        variant: {
            control: {type: "select"},
            options: Object.keys(ChipVariant),
        },
        color: {
            control: {type: "select"},
            options: Object.keys(ChipColor),
        },
        size: {
            control: {type: "select"},
            options: Object.keys(ChipSize),
        },
        roundedFull: {
            control: { type: "boolean" },
        },
    },
};

export const Primary = {
    args: {
        label: "به من توجه کن",
    },
};

