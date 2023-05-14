import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {

  constructor(private route: ActivatedRoute) {

  }

  id:any =''


  showRoute():any {
    console.log(this.route)
    this.route.params.subscribe((param) => {
      console.log(param)
      this.id = this.route.snapshot.paramMap.get('id')
    })
    
  } 

 

  


}
