import { Component } from 'angular2/core';
// import { AuthorService } from './authors.service';

@Component({
    selector:'authors',
    template: ` 
    <h1>Authors</h1>
    {{title}}
    <ul>
    Authors: string[];
        <li *ngFor="#author of Authors">
            {{author}}
        </li>
    </ul>
    `
})
export class AuthorsComponent{
    Authors: string[];
    title: 'Title for the author page';

    constructor(authorService:AuthorService){
        this.Authors = authorService.GetAuthors();
    }
    
}