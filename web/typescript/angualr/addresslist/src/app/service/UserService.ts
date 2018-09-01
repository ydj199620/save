import {  Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';//官网
@Injectable()
export class UserService{
    url:string;
    constructor(private http:Http){
        this.url='http://jsonplaceholder.typicode.com/users/'
    }
    getUsers(){
        return this.http.get(this.url).map(
            res=>res.json()
        )
    }
    getUserById(id){
    	return this.http.get(this.url+id).map(
    		res=>res.json()
    	)
    }
}