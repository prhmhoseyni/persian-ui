import { html } from "lit";
import "./input.css";

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
            <input type="text" class="input" placeholder="text"/>
            <input type="text" class="input" value="text"/>
            <input type="text" class="input input--error" value="text"/>
            <input type="text" class="input" disabled value="text"/>
        </div>

        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
            <input type="text" class="input input-secondary" placeholder="text"/>
            <input type="text" class="input input-secondary" value="text"/>
            <input type="text" class="input input-secondary input--error" value="text"/>
            <input type="text" class="input input-secondary" disabled value="text"/>
        </div>
    `
};
