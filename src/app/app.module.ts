import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ListGamesRenderComponent } from './components/list-games-render/list-games-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    TestButtonComponent,
    ListRenderComponent,
    ListGamesRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ListApiRenderComponent,
    UsersComponent,
    Users2Component,
    Users3Component,
    Users4Component,
    If2Component,
    ItemDetailComponent,
    GetIdComponent,
    ItemIdComponent,
    AllBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
