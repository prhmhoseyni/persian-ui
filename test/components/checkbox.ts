import {html} from "lit";
import "./checkbox.css";
import {BtnColor, BtnSize, BtnVariant} from "./btn";

/**
 * :::: component ::::
 */

interface Props {
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
}

export default function Checkbox(props: Props) {
    if (props.indeterminate) {
        if (props.disabled) {
            return html`<input type="checkbox" name="checkbox" class="checkbox" disabled data-indeterminate="true" />`
        }

        return html`<input type="checkbox" name="checkbox" class="checkbox" data-indeterminate="true" />`
    }

    if (props.disabled) {
        return html`<input type="checkbox" name="checkbox" class="checkbox" disabled />`
    }

    return html`<input type="checkbox" name="checkbox" class="checkbox" />`
};
