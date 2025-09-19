import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import D3 from '@salesforce/resourceUrl/d3';

export default class GraphExample extends LightningElement {

    d3Initialized = false;

    async renderedCallback() {
        if (this.d3Initialized) {
            return;
        }

        try {
            await Promise.all([
                loadScript(this, D3 + "/d3.v5.min.js"),
                loadStyle(this, D3 + "/style.css"),
            ]);
            this.d3Initialized = true;
        } catch (err) {
            console.error(err);
        }
    }
}