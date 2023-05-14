import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../components/get-id/Animal';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetidService {

  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http:HttpClient,private http2:HttpClient) { }

  getDataId(id:number) {
  
    
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

  getData() {
    
    return this.http2.get<Animal>(this.apiUrl)
  }
}
