import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {PublicPanelComponent} from './public/components/public-panel.component';
import {AdminPanelComponent} from './admin/components/admin-panel.component';

@Component({
    selector: 'domofon-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/public', name: 'PublicPanel', component: PublicPanelComponent, useAsDefault: true },
    { path: '/admin', name: 'AdminPanel', component: AdminPanelComponent },
])
export class AppComponent {

}