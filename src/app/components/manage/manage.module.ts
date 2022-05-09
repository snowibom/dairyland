import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageComponent } from './manage.component';
import { PokemonModule } from '../pokemon/pokemon.module';



@NgModule({
  declarations: [
    ManageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonModule,
  ]
})
export class ManageModule { }
