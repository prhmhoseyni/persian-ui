import Btn, {BtnColor, BtnSize, BtnVariant} from './btn';

export default {
    title: "components/button",
    tags: ["autodocs"],
    render: (args) => Btn(args),
    argTypes: {
        label: {
            control: "text"
        },
        variant: {
            control: {type: "select"},
            options: Object.keys(BtnVariant),
            description:
                "<span class='css-o1d7ko'>filled</span>" +
                "<span class='css-o1d7ko'>outlined</span>" +
                "<span class='css-o1d7ko'>tinted</span>" +
                "<span class='css-o1d7ko'>text</span>",
        },
        color: {
            control: {type: "select"},
            options: Object.keys(BtnColor),
            description:
                "<span class='css-o1d7ko'>brand</span>" +
                "<span class='css-o1d7ko'>info</span>" +
                "<span class='css-o1d7ko'>success</span>" +
                "<span class='css-o1d7ko'>warning</span>" +
                "<span class='css-o1d7ko'>danger</span>",
        },
        size: {
            control: {type: "select"},
            options: Object.keys(BtnSize),
            description:
                "<span class='css-o1d7ko'>xs</span>" +
                "<span class='css-o1d7ko'>sm</span>" +
                "<span class='css-o1d7ko'>md</span>" +
                "<span class='css-o1d7ko'>lg</span>" +
                "<span class='css-o1d7ko'>xl</span>",
        },
        roundedFull: {
            control: { type: "boolean" },
        },
    },
};

export const Primary = {
    args: {
        label: "فشارم بده",
    },
};

