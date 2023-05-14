import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListGamesRenderComponent } from './components/list-games-render/list-games-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListApiRenderComponent } from './components/list-api-render/list-api-render.component';
import { UsersComponent } from './components/users/users.component';
import { Users2Component } from './components/users2/users2.component';
import { Users3Component } from './components/users3/users3.component';
import { Users4Component } from './components/users4/users4.component';
import { If2Component } from './components/if2/if2.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { GetIdComponent } from './components/get-id/get-id.component';
import { ItemIdComponent } from './components/item-id/item-id.component';
import { AllBooksComponent } from './activatedRoute/all-books/all-books.component';
import { ListAnimal1Component } from './activatedRoute2/list-animal1/list-animal1.component';
import { ItemAnimalComponent } from './activatedRoute2/item-animal/item-animal.component';

const routes: Routes = [
  {path:'firstComponent',component: FirstComponentComponent},
  {path:'listGames',component:ListGamesRenderComponent},
  {path:'list',component:ListRenderComponent},
  {path:'ifRender', component:IfRenderComponent},
  {path:'animaisApi', component:ListApiRenderComponent},
  {path:'usersAPI',component:UsersComponent},
  {path:'usersAPI2',component: Users2Component},
  {path:'usersAPI3',component:Users3Component},
  {path:'usersAPI4',component:Users4Component},
  {path:'if2', component:If2Component},
  {path:'itemDetail/:id', component:ItemDetailComponent},
  {path:'getId',component:GetIdComponent},
  {path:'itemId/:id',component:ItemIdComponent},
  {path:'listAnimal1',component:ListAnimal1Component},
  {path:'itemAnimal/:id',component:ItemAnimalComponent},


  {path:'allBooks/:id',component:AllBooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
