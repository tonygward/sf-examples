import { LightningElement } from 'lwc';

export default class Gallery extends LightningElement {
    components = [
        {
            name: 'lightning:accordion',
            description: 'A simple accordion',
            image: 'genericIcon.png'
        },
        {
            name: 'lightning:alert',
            description: 'create an alert',
            image: 'genericIcon.png'
        },
        {
            name: 'lightning:avatar',
            description: 'create an avatar',
            image: 'avatar.png'
        },
        {
            name: 'lightning:badge',
            description: 'create a badge',
            image: 'genericIcon.png'
        },
        {
            name: 'lightning:breadcrumb',
            description: 'create a breadcrumb',
            image: 'genericIcon.png'
        }
    ];
}