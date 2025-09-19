import { LightningElement, api } from 'lwc';
import componentIcons from "@salesforce/resourceUrl/galleryComponentIcons"

export default class GalleryComponent extends LightningElement {
    @api name;
    @api description;
    @api image;

    get imageUrl() {
        return componentIcons + '/' + this.image;
    }

    get detailUrl() {
        return '/lightning/cmp/c__galleryComponentDetail?c__name=' + this.name;
    }
}