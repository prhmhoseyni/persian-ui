import { html } from "lit";
import "./textarea.css";

/**
 * :::: component ::::
 */

// interface Props {
//     checked?: boolean;
//     disabled?: boolean;
//     indeterminate?: boolean;
// }

export default function Input() {
    return html`
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <textarea class="textarea"></textarea>
            <textarea class="textarea textarea--error"></textarea>
            <textarea class="textarea" disabled></textarea>
        </div>

        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
            <textarea class="textarea textarea-secondary"></textarea>
            <textarea class="textarea textarea-secondary textarea--error"></textarea>
            <textarea class="textarea textarea-secondary" disabled></textarea>
        </div>
    `
};
