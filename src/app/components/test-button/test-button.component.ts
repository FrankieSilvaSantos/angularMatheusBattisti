import { Component } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent {

  numero: number = 0

  handleClick() {

    this.numero = Math.floor(Math.random() * 10)
  }


}
