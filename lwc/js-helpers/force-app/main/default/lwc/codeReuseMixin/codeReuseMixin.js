import { LightningElement } from 'lwc';

export const CodeReuseMixin = (Base = LightningElement) => class extends Base {
    connectedCallback() {
        // console.log('loading something');
    }

    customMessage = 'hi from a Mixin';
}