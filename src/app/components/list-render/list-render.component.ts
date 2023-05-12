import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [

    {name:'Turca',type:'Dog', age:4},
    {name:'Tom',type:'Cat', age: 10},
    {name:'Frida',type:'Dog', age: 5},
    {name:'Bob',type:'horse', age: 11}


  ]

  animalDetails:any = ''

  showAge(animal:Animal) {

    this.animalDetails = `Raça ${animal.type} -- Idade: ${animal.age}`

  }

  animal:Animal = {
    name:'teste',
    type:'alguma coisa',
    age:15
  }


}
