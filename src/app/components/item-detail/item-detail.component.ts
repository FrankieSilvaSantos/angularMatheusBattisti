import { Component } from '@angular/core';
import { Animal } from '../list-api-render/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListApiRenderService } from 'src/app/api/list-api-render.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  animals?:Animal

  

  constructor(private api:ListApiRenderService, private route:ActivatedRoute){

    this.getAnimal()

  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.api.getItem(id).subscribe((animals:any) => this.animals = animals)
  }

}
