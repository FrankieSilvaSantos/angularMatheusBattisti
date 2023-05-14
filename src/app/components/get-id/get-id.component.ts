import { Component } from '@angular/core';
import { Animal } from './Animal';
import { GetidService } from 'src/app/getIdServices/getid.service';

@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css']
})
export class GetIdComponent {

  animals:Animal[] = []

  animalDetails:any = ''

  showAnimal(animal:Animal) {
    this.animalDetails = animal.id,animal.name,animal.type,animal.age
  }

  animal = {
    id:2,
    name:'',
    type:'',
    age:2
  }

  constructor(private getid:GetidService) {
    
    this.getid.getData().subscribe((a:any) => this.animals = a)
    
  }

  

}
