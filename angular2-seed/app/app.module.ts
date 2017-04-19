import { NgModule }       from 'angular2/core';
import { BrowserModule }  from 'angular2/platform-browser';
import { AppComponent }   from './app.component';
import {AuthorsComponent} from './authors.component';
import {CoursesComponent} from './courses.component';
// import { AuthorsService } from './authors.service';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    CoursesComponent,
    // AuthorsComponent 
    ],
  bootstrap:    [ AppComponent ],
  // providers:[AuthorsService]
})
export class AppModule { }
