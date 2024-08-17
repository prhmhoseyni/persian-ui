import {html} from "lit";
import "./btn.css";

/**
 * :::: types ::::
 */
export enum BtnSize {
    "xs" = "btn-xs",
    "sm" = "btn-sm",
    "md" = "",
    "lg" = "btn-lg",
    "xl" = "btn-xl",
}

export enum BtnVariant {
    "filled" = "",
    "outlined" = "btn-outlined",
    "tinted" = "btn-tinted",
    "text" = "btn-text",
}

export enum BtnColor {
    "brand" = "btn-brand",
    "info" = "btn-info",
    "success" = "btn-success",
    "warning" = "btn-warning",
    "danger" = "btn-danger",
}

/**
 * :::: component ::::
 */
interface Props {
    label: string;
    variant?: BtnVariant;
    color?: BtnColor;
    size?: BtnSize;
    roundedFull?: boolean;
}

export default function Btn(props: Props) {
    const variant = props.variant ? BtnVariant[props.variant] : BtnVariant.filled
    const color = props.color ? BtnColor[props.color] : BtnColor.brand
    const size = props.size ? BtnSize[props.size] : BtnSize.md
    const roundedFull = props.roundedFull ? "btn-rounded-full" : ""

    return html`
        <button type="button" class=${["btn", variant, color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
    `;
};
