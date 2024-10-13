import { html } from "lit";
import "./select.css";

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
            <select class="select">
                <option value="test">test</option>
            </select>
            
            <select class="select select--error">
                <option value="test">test</option>
            </select>
            
            <select class="select" disabled>
                <option value="test">test</option>
            </select>
        </div>

        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">            
            <select class="select select-secondary">
                <option value="test">test</option>
            </select>
            
            <select class="select select-secondary select--error">
                <option value="test">test</option>
            </select>
            
            <select class="select select-secondary" disabled>
                <option value="test">test</option>
            </select>
        </div>
    `
};
