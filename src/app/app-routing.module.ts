import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListGamesRenderComponent } from './components/list-games-render/list-games-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListApiRenderComponent } from './components/list-api-render/list-api-render.component';

const routes: Routes = [
  {path:'firstComponent',component: FirstComponentComponent},
  {path:'listGames',component:ListGamesRenderComponent},
  {path:'list',component:ListRenderComponent},
  {path:'ifRender', component:IfRenderComponent},
  {path:'animaisApi', component:ListApiRenderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
