import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    template: `<h1>my list of Couses</h1>
    <div [hidden]="courses.length == 0" >
        ListCourses      
    </div>
    <div [hidden]="courses.length >0">
    you dont have courses
    </div>
    <ul class="nav nav-pills">
        <li>
            <a>Map view</a>
        </li>
        <li>
            <a>List view</a>
        </li>
    </ul>
`,

})
export class AppComponent {
    courses=[];
    viewMode='map'
 }