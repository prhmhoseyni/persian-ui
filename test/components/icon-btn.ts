import {html} from "lit";
import "./icon-btn.css";

/**
 * :::: types ::::
 */

export enum IconButtonSize {
    "xs" = "icon-btn-xs",
    "sm" = "icon-btn-sm",
    "md" = "",
    "lg" = "icon-btn-lg",
    "xl" = "icon-btn-xl",
}

export enum IconButtonVariant {
    "filled" = "",
    "outlined" = "icon-btn-outlined",
    "tinted" = "icon-btn-tinted",
    "text" = "icon-btn-text",
}

export enum IconButtonColor {
    "brand" = "icon-btn-brand",
    "info" = "icon-btn-info",
    "success" = "icon-btn-success",
    "warning" = "icon-btn-warning",
    "danger" = "icon-btn-danger",
    "gray" = "icon-btn-gray",
}

/**
 * :::: component ::::
 */

interface Props {
    label: string;
    variant?: IconButtonVariant;
    color?: IconButtonColor;
    size?: IconButtonSize;
    roundedFull?: boolean;
    disabled?: boolean;
}

export default function IconButton(props: Props) {
    const variant = props.variant ? IconButtonVariant[props.variant] : IconButtonVariant.filled
    const color = props.color ? IconButtonColor[props.color] : IconButtonColor.brand
    const size = props.size ? IconButtonSize[props.size] : IconButtonSize.md
    const roundedFull = props.roundedFull ? "icon-btn-rounded-full" : ""

    return html`
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <button type="button" class=${["icon-btn", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>   
            </button>
            
            <button type="button" class=${["icon-btn icon-btn-tinted", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            <button type="button" class=${["icon-btn icon-btn-outlined", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            <button type="button" class=${["icon-btn icon-btn-text", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
        
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
            <button type="button" disabled class=${["icon-btn", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            <button type="button" disabled class=${["icon-btn icon-btn-tinted", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            <button type="button" disabled class=${["icon-btn icon-btn-outlined", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            <button type="button" disabled class=${["icon-btn icon-btn-text", color, size, roundedFull].filter(Boolean).join(" ")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
    `;
};
