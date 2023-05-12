import { Component } from '@angular/core';

import { Games } from './Games';

@Component({
  selector: 'app-list-games-render',
  templateUrl: './list-games-render.component.html',
  styleUrls: ['./list-games-render.component.css']
})
export class ListGamesRenderComponent {

  games: Games[] = [
    {name:'Dark Souls',
    price: 180,
    type: 'RPG'
  },

  {name:'Dark Souls3',
  price: 250,
  type:'RPG'

},

  {name:'Final Fantasy',
  price:150,
  type:'RPG'
}



  ]

  gameDetails:any = ''

    showDetails(game:Games) {

      this.gameDetails = `Preço ${game.price} -- Tipo ${game.type}`

    }

    game:Games = {
      name:'',
      price:200,
      type:''
      
    }

}
