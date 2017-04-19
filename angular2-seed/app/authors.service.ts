import {Injectable} from 'angular2/core';

@Injectable()
export class authorService{
    getAuthors(){
        return["Author1",
        "Author2",
        "Author3"
        ]
    }
}