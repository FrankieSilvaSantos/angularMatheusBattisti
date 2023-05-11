import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name:string = 'Franzie'
  age:number = 26
  job:string = 'Coder'

  hobbies = ['Work out ','Code ','Anime ','Manga ','Games']

  car = {
    name: 'Polo',
    year: 2019
  }

}
