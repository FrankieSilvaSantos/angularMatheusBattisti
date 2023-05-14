import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../components/users/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData():Observable<Users[]> {
    let url:any = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Users[]>(url)
  }


}
