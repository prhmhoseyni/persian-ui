import {html} from "lit";
import "./radio.css";

/**
 * :::: component ::::
 */
export default function Radio() {
    return html`
        <div dir="rtl" style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <input type="radio" name="radio" class="radio"/>
            <input type="radio" name="radio" class="radio" checked/>
            <input type="radio" name="radio-disabled" class="radio" disabled/>
            <input type="radio" name="radio-disabled" class="radio" checked disabled/>
        </div>
    `;
};

