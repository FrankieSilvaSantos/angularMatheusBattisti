import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-if2',
  templateUrl: './if2.component.html',
  styleUrls: ['./if2.component.css']
})
export class If2Component {
@Input()
    name = 'Frankie'

    name2 = 'Franzie'

    texto = `meu nome nao é ${this.name2}`

    nameValue=''

     p = false

     color = 'lightGreen'

     background = "background"
     

}
