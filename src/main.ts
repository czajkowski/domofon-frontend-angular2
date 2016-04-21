import {bootstrap} from 'angular2/platform/browser';
import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdRadioButton} from '@angular2-material/radio';
import {MdSpinner, MdProgressCircle} from '@angular2-material/progress-circle';
import {MdToolbar} from '@angular2-material/toolbar';

import {AppComponent}   from './app/app.component';



bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {
        useValue: [
            MD_CARD_DIRECTIVES,
            MD_SIDENAV_DIRECTIVES,
            MD_INPUT_DIRECTIVES,
            MD_LIST_DIRECTIVES,
            [
                MdButton,
                MdAnchor,
                MdCheckbox,
                MdRadioButton,
                MdSpinner,
                MdProgressCircle,
                MdToolbar
            ]
        ],
        multi: true
    }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })

]);