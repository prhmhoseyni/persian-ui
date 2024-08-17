import {html} from "lit";
import "./chip.css";

/**
 * :::: types ::::
 */
export enum ChipSize {
    "xs" = "chip-xs",
    "sm" = "chip-sm",
    "md" = "",
    "lg" = "chip-lg",
}

export enum ChipVariant {
    "filled" = "",
    "outlined" = "chip-outlined",
    "tinted" = "chip-tinted",
    "text" = "chip-text",
}

export enum ChipColor {
    "brand" = "chip-brand",
    "info" = "chip-info",
    "success" = "chip-success",
    "warning" = "chip-warning",
    "danger" = "chip-danger",
}

/**
 * :::: component ::::
 */
interface Props {
    label: string;
    variant?: ChipVariant;
    color?: ChipColor;
    size?: ChipSize;
    roundedFull?: boolean;
}

export default function Chip(props: Props) {
    const variant = props.variant ? ChipVariant[props.variant] : ChipVariant.filled
    const color = props.color ? ChipColor[props.color] : ChipColor.brand
    const size = props.size ? ChipSize[props.size] : ChipSize.md
    const roundedFull = props.roundedFull ? "chip-rounded-full" : ""

    return html`
        <div class=${["chip", variant, color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</div>
    `;
};
