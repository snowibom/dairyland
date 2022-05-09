import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  declarations: [
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PokemonComponent,
  ]
})
export class PokemonModule { }
