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
    "gray" = "btn-gray",
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
    disabled?: boolean;
}

export default function Btn(props: Props) {
    const variant = props.variant ? BtnVariant[props.variant] : BtnVariant.filled
    const color = props.color ? BtnColor[props.color] : BtnColor.brand
    const size = props.size ? BtnSize[props.size] : BtnSize.md
    const roundedFull = props.roundedFull ? "btn-rounded-full" : ""
    const disabled = props.disabled ? "true" : "false"

    return html`
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <button type="button" class=${["btn", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
            <button type="button" class=${["btn btn-tinted", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
            <button type="button" class=${["btn btn-outlined", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
            <button type="button" class=${["btn btn-text", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
        </div>
        
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
            <button type="button" disabled class=${["btn", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
            <button type="button" disabled class=${["btn btn-tinted", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
            <button type="button" disabled class=${["btn btn-outlined", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
            <button type="button" disabled class=${["btn btn-text", color, size, roundedFull].filter(Boolean).join(" ")}>${props.label}</button>
        </div>
    `;
};
