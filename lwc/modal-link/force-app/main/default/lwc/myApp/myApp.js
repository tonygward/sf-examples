import { LightningElement } from 'lwc';
import MyModal from 'c/myModal';
import { NavigationMixin } from "lightning/navigation";

export default class MyApp extends NavigationMixin(LightningElement) {
    async handleClick() {
        try {
            const result = await MyModal.open({
                // `label` is not included here in this example.
                // it is set on lightning-modal-header instead
                size: 'large',
                description: 'Accessible description of modal\'s purpose',
                content: 'Passed into content api',
            });
            // if modal closed with X button, promise returns result = 'undefined'
            // if modal closed with OK button, promise returns result = 'okay'
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.sfdcpoint.com/"
            }
        });
        console.log('navigated');
    }
}