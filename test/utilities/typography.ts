import {html} from "lit";
import "./typography.css";

/**
 * :::: types ::::
 */
export enum TypographyVariant {
    "heading1" = "text-h1",
    "heading2" = "text-h2",
    "heading3" = "text-h3",
    "heading4" = "text-h4",
    "heading5" = "text-h5",
    "title1" = "text-title1",
    "title2" = "text-title2",
    "title3" = "text-title3",
    "title4" = "text-title4",
    "body1" = "text-body1",
    "body2" = "text-body2",
    "body3" = "text-body3",
    "body4" = "text-body4",
    "label1" = "text-label1",
    "label2" = "text-label2",
    "label3" = "text-label3",
    "label4" = "text-label4",
    "caption1" = "text-caption1",
    "caption2" = "text-caption2",
}

/**
 * :::: component ::::
 */
interface Props {
    label: string;
    variant: keyof typeof TypographyVariant;
}

export default function Typography(props: Props) {
    const variant = props.variant ? TypographyVariant[props.variant] : TypographyVariant.heading1

    return html`
        <div class=${[variant].filter(Boolean).join(" ")}>${props.label}</div>
    `;
};
