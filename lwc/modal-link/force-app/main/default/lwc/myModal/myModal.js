import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import { NavigationMixin } from "lightning/navigation";
import { CurrentPageReference } from 'lightning/navigation';

export default class MyModal extends NavigationMixin(LightningModal) {

    connectedCallback() {
        console.log('connectedCallback');
        // this.navigateToWebPage();
        window.location.replace('https://www.bbc.co.uk');
    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate](this.pageReference, false);
        console.log('navigated');
    }

    get pageReference() {
        return {
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.bbc.co.uk',
            },
        };

    }
}