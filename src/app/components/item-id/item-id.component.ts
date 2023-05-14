import { Component } from '@angular/core';
import { Animal } from '../get-id/Animal';
import { ActivatedRoute } from '@angular/router';
import { GetidService } from 'src/app/getIdServices/getid.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-id',
  templateUrl: './item-id.component.html',
  styleUrls: ['./item-id.component.css']
})
export class ItemIdComponent {

  animals?:Animal

  animalDetails:any = ''

  showAnimal(animal:Animal) {
    this.animalDetails = animal.id,animal.name,animal.type,animal.age
  }

  animal = {
    id:2
  }
 

  constructor(private route:ActivatedRoute, private getId2:GetidService) {

    this.getValue()

  }


  getValue() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    
    return this.getId2.getDataId(id).subscribe((animals:any) => this.animals = animals)
  }

}
