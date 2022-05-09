import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { PokemonModule } from './components/pokemon/pokemon.module';
import { TrainersModule } from './components/trainers/trainers.module';
import { CreateModule } from './components/create/create.module';
import { ManageModule } from './components/manage/manage.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PokemonModule,
    TrainersModule,
    CreateModule,
    ManageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
