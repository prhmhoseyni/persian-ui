import Chip, {ChipColor, ChipSize, ChipVariant} from './chip';

export default {
    title: "components/chip",
    tags: ["autodocs"],
    render: (args) => Chip(args),
    argTypes: {
        label: {
            control: "text"
        },
        variant: {
            control: {type: "select"},
            options: Object.keys(ChipVariant),
            description:
                "<span class='css-o1d7ko'>filled</span>" +
                "<span class='css-o1d7ko'>outlined</span>" +
                "<span class='css-o1d7ko'>tinted</span>" +
                "<span class='css-o1d7ko'>text</span>",
        },
        color: {
            control: {type: "select"},
            options: Object.keys(ChipColor),
            description:
                "<span class='css-o1d7ko'>brand</span>" +
                "<span class='css-o1d7ko'>info</span>" +
                "<span class='css-o1d7ko'>success</span>" +
                "<span class='css-o1d7ko'>warning</span>" +
                "<span class='css-o1d7ko'>danger</span>",
        },
        size: {
            control: {type: "select"},
            options: Object.keys(ChipSize),
            description:
                "<span class='css-o1d7ko'>xs</span>" +
                "<span class='css-o1d7ko'>sm</span>" +
                "<span class='css-o1d7ko'>md</span>" +
                "<span class='css-o1d7ko'>lg</span>",
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

