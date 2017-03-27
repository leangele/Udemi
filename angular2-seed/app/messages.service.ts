import {Injectable} from 'angular2/core';

@Injectable()
export class MessagesService{
    getMessages(){
        return['m1','m2','m3'];
    }
}