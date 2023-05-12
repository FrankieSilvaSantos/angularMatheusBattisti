import { Injectable } from '@angular/core';
import { Games } from '../components/list-games-render/Games';

@Injectable({
  providedIn: 'root'
})
export class ListGamesServiceService {

  constructor() { }

      remove(games:Games[],game:Games) {

        return games.filter((a) => a.name !== game.name)

      }
  
    }



