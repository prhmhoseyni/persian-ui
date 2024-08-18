import {html} from "lit";
import "./shadow.css";


/**
 * :::: component ::::
 */

export default function Shadow() {
    return html`        
        <div style="margin-top: 16px; padding: 1rem; background-image: url(https://s3-alpha-sig.figma.com/img/a595/22ee/9c904fb4c6e205f1fb2700cb7b254360?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jvQHvKY9VRWFmivs5wfgKJpzRtb-PmTU1wjkF3EIJBlEeoIgcNus2nb3UwHwRC0KUpMY51owSM-OgGZ-fqbpjWUKy4HVsNqommXHd1aKsTM9BiLV-c5uiei33tDuaQT~-6YlQwIuR~hnLTm8RazyEMB8YmQh5IMz3vdRKFvBQ1pDnR68NYTCx3eGwOGJSLFvBnhO96ELR4oRj9rWyB7lmLh6yLm5MrFLlol3vHyFknUI6o~igjkS9Uykxz0C-Ha35RHSu-JtXPf4JNZ-LOjPOhshTNyAB3W0n-S-ZFwChS~P0Ga26TxQsWvDBQv6yWYdmkiJhclkCwUOr1gIX1aVWQ__);">
            <div style="display: flex; gap: 2rem; align-items: center; justify-content: start;">
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-xs"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-sm"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-md"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-lg"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-xl"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-2xl"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-3xl"></div>
            </div>

            <div style="display: flex; gap: 2rem; align-items: center; justify-content: start; margin-top: 2rem;">
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-card-sm"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-card-md"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-card-lg"></div>
            </div>

            <div style="display: flex; gap: 2rem; align-items: center; justify-content: start; margin-top: 2rem;">
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-btn-brand"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-btn-info"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-btn-success"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-btn-warning"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-btn-danger"></div>
            </div>

            <div style="display: flex; gap: 2rem; align-items: center; justify-content: start; margin-top: 2rem;">
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-focus-brand"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-focus-info"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-focus-success"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-focus-warning"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-focus-danger"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-focus-gray"></div>
            </div>

            <div style="display: flex; gap: 2rem; align-items: center; justify-content: start; margin-top: 2rem;">
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-dialog"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-dropdown"></div>
                <div style="background-color: #FFFF; width: 4rem; height: 4rem; border-radius: 50%;" class="shadow-control"></div>
            </div>
        </div>
    `;
};
