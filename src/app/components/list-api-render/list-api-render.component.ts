import { Component } from '@angular/core';
import { ListApiRenderService } from 'src/app/api/list-api-render.service';
import { Animal } from './Animal';

@Component({
  selector: 'app-list-api-render',
  templateUrl: './list-api-render.component.html',
  styleUrls: ['./list-api-render.component.css']
})
export class ListApiRenderComponent {

  animals: Animal[] = []

  animalDetails:any = ''
  constructor(private listApiRenderService: ListApiRenderService ) {
    this.getAnimals()
  }

  showDetails(animal:Animal) {

    this.animalDetails = `Raça: ${animal.type} -- Idade: ${animal.age}`

  }

  animal:Animal = {
    name:'teste',
    type:'alguma coisa',
    age:15
  }

  remove(animal:Animal) {

    console.log('Removendo animal...')
    this.animals = this.listApiRenderService.remove(this.animals,animal)
  }

  getAnimals():void {
    this.listApiRenderService.getAll().subscribe((animals) => (this.animals = animals))
  }


}




