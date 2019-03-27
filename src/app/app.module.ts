import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { DisplayGameComponent } from './display-game/display-game.component';
// import { OneMoreComponent } from './one-more/one-more.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    DisplayGameComponent,
    // OneMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
