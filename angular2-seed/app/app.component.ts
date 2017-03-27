import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {MessagesComponent} from './messages.components';
@Component({
    selector: 'my-app',
    template: '<messages></messages>',
    directives:[CoursesComponent]
})
export class AppComponent { }