import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users3 } from '../components/users3/Users3';

@Injectable({
  providedIn: 'root'
})
export class Users3Service {

  constructor(private http:HttpClient) { }

 
  getData() {

    let url = 'https://jsonplaceholder.typicode.com/todos'

    return this.http.get(url)
    
  }

}
