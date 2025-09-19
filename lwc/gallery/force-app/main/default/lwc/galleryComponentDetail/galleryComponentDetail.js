import { LightningElement, wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class GalleryComponentDetail extends LightningElement {
    @wire(CurrentPageReference)
    currentPageRef;

    get componentName() {
        return this.currentPageRef.state?.c__name;
    }
}