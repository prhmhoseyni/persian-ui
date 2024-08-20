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

    return html`
        <button>
            <span>title</span>
        </button>
        
        
        
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
        
                <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
            <button type="button" class=${["btn", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g id="Icon Right">
                        <g id="Group 811515">
                            <rect id="Rectangle 4" x="2.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 43" x="2.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 30" x="9.16667" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 44" x="9.16667" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 35" x="7.5" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 45" x="7.5" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 39" x="7.5" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 46" x="7.5" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 36" x="14.1667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 47" x="14.1667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 40" x="14.1667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 48" x="14.1667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 9" x="2.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 49" x="2.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 61" x="2.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 31" x="9.16667" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 50" x="9.16667" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 62" x="9.16667" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 29" x="4.16667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 51" x="4.16667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 41" x="4.16667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 52" x="4.16667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 32" x="10.8333" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 53" x="10.8333" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 42" x="10.8333" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 54" x="10.8333" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 5" x="5.83333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 55" x="5.83333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 33" x="12.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 56" x="12.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 37" x="15.8333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 57" x="15.8333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 10" x="5.83333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 58" x="5.83333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 63" x="5.83333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 34" x="12.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 59" x="12.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 64" x="12.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 38" x="15.8333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 60" x="15.8333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 65" x="15.8333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                        </g>
                    </g>
                </svg>
                ${props.label}
            </button>
            <button type="button" class=${["btn", color, size, roundedFull].filter(Boolean).join(" ")}>
                ${props.label}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g id="Icon Right">
                        <g id="Group 811515">
                            <rect id="Rectangle 4" x="2.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 43" x="2.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 30" x="9.16667" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 44" x="9.16667" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 35" x="7.5" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 45" x="7.5" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 39" x="7.5" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 46" x="7.5" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 36" x="14.1667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 47" x="14.1667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 40" x="14.1667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 48" x="14.1667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 9" x="2.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 49" x="2.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 61" x="2.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 31" x="9.16667" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 50" x="9.16667" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 62" x="9.16667" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 29" x="4.16667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 51" x="4.16667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 41" x="4.16667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 52" x="4.16667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 32" x="10.8333" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 53" x="10.8333" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 42" x="10.8333" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 54" x="10.8333" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 5" x="5.83333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 55" x="5.83333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 33" x="12.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 56" x="12.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 37" x="15.8333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 57" x="15.8333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 10" x="5.83333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 58" x="5.83333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 63" x="5.83333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 34" x="12.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 59" x="12.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 64" x="12.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 38" x="15.8333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 60" x="15.8333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 65" x="15.8333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                        </g>
                    </g>
                </svg>
            </button>
            <button type="button" class=${["btn", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g id="Icon Right">
                        <g id="Group 811515">
                            <rect id="Rectangle 4" x="2.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 43" x="2.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 30" x="9.16667" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 44" x="9.16667" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 35" x="7.5" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 45" x="7.5" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 39" x="7.5" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 46" x="7.5" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 36" x="14.1667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 47" x="14.1667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 40" x="14.1667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 48" x="14.1667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 9" x="2.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 49" x="2.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 61" x="2.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 31" x="9.16667" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 50" x="9.16667" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 62" x="9.16667" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 29" x="4.16667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 51" x="4.16667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 41" x="4.16667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 52" x="4.16667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 32" x="10.8333" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 53" x="10.8333" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 42" x="10.8333" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 54" x="10.8333" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 5" x="5.83333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 55" x="5.83333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 33" x="12.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 56" x="12.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 37" x="15.8333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 57" x="15.8333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 10" x="5.83333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 58" x="5.83333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 63" x="5.83333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 34" x="12.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 59" x="12.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 64" x="12.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 38" x="15.8333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 60" x="15.8333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 65" x="15.8333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                        </g>
                    </g>
                </svg>
                ${props.label}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g id="Icon Right">
                        <g id="Group 811515">
                            <rect id="Rectangle 4" x="2.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 43" x="2.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 30" x="9.16667" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 44" x="9.16667" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 35" x="7.5" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 45" x="7.5" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 39" x="7.5" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 46" x="7.5" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 36" x="14.1667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 47" x="14.1667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 40" x="14.1667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 48" x="14.1667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 9" x="2.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 49" x="2.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 61" x="2.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 31" x="9.16667" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 50" x="9.16667" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 62" x="9.16667" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 29" x="4.16667" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 51" x="4.16667" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 41" x="4.16667" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 52" x="4.16667" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 32" x="10.8333" y="4.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 53" x="10.8333" y="10.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 42" x="10.8333" y="7.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 54" x="10.8333" y="14.1667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 5" x="5.83333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 55" x="5.83333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 33" x="12.5" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 56" x="12.5" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 37" x="15.8333" y="2.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 57" x="15.8333" y="9.16667" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 10" x="5.83333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 58" x="5.83333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 63" x="5.83333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 34" x="12.5" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 59" x="12.5" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 64" x="12.5" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 38" x="15.8333" y="5.83333" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 60" x="15.8333" y="12.5" width="1.66667" height="1.66667" fill="white"/>
                            <rect id="Rectangle 65" x="15.8333" y="15.8333" width="1.66667" height="1.66667" fill="white"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    `;

    const disabled = props.disabled ? "true" : "false"
};
