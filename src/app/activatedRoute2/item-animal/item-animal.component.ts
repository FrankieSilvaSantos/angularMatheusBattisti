import { Component } from '@angular/core';
import { Animal} from '../Animal';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ListService } from '../list.service';

@Component({
  selector: 'app-item-animal',
  templateUrl: './item-animal.component.html',
  styleUrls: ['./item-animal.component.css']
})
export class ItemAnimalComponent {

  animals?:Animal

  animalDetails:any = ''

  showId(animal:Animal) {
    this.animalDetails = animal.id
  }

  animal = {
    id:2
  }

  constructor(private list:ListService, private route:ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.list.getId(id).subscribe((a:any) => this.animals = a)
  }

  animaisId ='animaisId'

}
