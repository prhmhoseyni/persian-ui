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
    return html`
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <input type="checkbox" name="checkbox" class="checkbox"/>
            <input type="checkbox" name="checkbox" class="checkbox" checked/>
            <input type="checkbox" name="checkbox-disabled" class="checkbox" disabled/>
            <input type="checkbox" name="checkbox-disabled" class="checkbox" checked disabled/>
            <input type="checkbox" name="checkbox-disabled" class="checkbox" data-indeterminate="true" />
            <input type="checkbox" name="checkbox-disabled" class="checkbox" checked disabled data-indeterminate="true"/>
        </div>
    `
};
