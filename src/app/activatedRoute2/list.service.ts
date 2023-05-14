import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './Animal';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  apiUrl = 'http://localhost:3000/animals'


  getData() {
    return this.http.get(this.apiUrl)
  }

  getId(id:number) {

    
    return this.http.get(`${this.apiUrl}/${id}`)
  }

}
