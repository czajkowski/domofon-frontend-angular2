import {Component} from 'angular2/core';

@Component({
    selector: 'domofon-app',
    template: require('./public-panel.component.html'),
    styles: [require('./public-panel.component.css')]
})
export class PublicPanelComponent {
    name: ""
}