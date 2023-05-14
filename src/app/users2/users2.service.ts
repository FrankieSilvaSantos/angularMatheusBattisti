import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users2 } from '../components/users2/Users2';

@Injectable({
  providedIn: 'root'
})
export class Users2Service {

  constructor(private http:HttpClient) { }

    


    getData():Observable<Users2[]> {
      let url = 'https://jsonplaceholder.typicode.com/todos'
      return this.http.get<Users2[]>(url)

    }

}
