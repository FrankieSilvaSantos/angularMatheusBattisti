import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Animal } from '../Animal';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-animal1',
  templateUrl: './list-animal1.component.html',
  styleUrls: ['./list-animal1.component.css']
})
export class ListAnimal1Component {

  animals:Animal[] = []

  animalsDetails:any = ''

  showAnimals(animal:Animal) {
    this.animalsDetails =  animal.id,animal.name,animal.type,animal.age
  }


  animal = {
    id: 2,
    name:'',
    type:'',
    age:2

  }

  constructor(private list:ListService) {
    this.list.getData().subscribe((a:any) => this.animals = a)

  }

  listAnimal = 'listAnimal'

}
