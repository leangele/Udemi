import {Component} from 'angular2/core'; // similar a el using de c#
import {CourseService} from './course.service'  // similar al usign de c#
@Component({
   selector :'courses',
   template:`
   <h2>Courses</h2>
   {{ title }}
   <ul>
        <li *ngFor="# course of courses">
        {{course}}
        </li>
   </ul>
   `,
   providers:[CourseService]
})// esto es una funcion similar a un metodo de c# esta fuera de la clase
   export class CoursesComponent{
       title = "the title of the courses page"; //es similar a propiedades en c#
       courses;

       constructor (courseService: CourseService){
           this.courses=courseService.getCourses();  
       }
   }
