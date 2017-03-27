import {Component} from 'angular2/core'; // similar a el using de c#
import {CourseService} from './course.service'  // similar al usign de c#
import {attendanceService} from './attendance.service'
@Component({
   selector :'courses',
   template:`
    <h2>Courses</h2>
    <h3>{{ title }}</h3>
    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li *ngFor="# course of courses">
                <a href="#">{{ course.course }}-{{ course.teacher }}</a> 
            </li>
        </ul>
    </div>
    `,
   providers:[CourseService,attendanceService]
})// esto es una funcion similar a un metodo de c# esta fuera de la clase
   export class CoursesComponent{
       title = "the title of the courses page"; //es similar a propiedades en c#
       courses;
       attendances;

       constructor (courseService: CourseService){
           this.courses=courseService.getCourses(); 
       };
    //    constructor (attendanceService: attendanceService){
    //        this.attendances=attendanceService.getAttendances();
    //    };
   }
