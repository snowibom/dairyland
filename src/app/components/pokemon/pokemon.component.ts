import { Component, OnInit } from '@angular/core';
import { IPokemon, TypeEnum } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'dl-pokemon',
  templateUrl: './pokemon.component.html',
})

export class PokemonComponent implements OnInit {
  types = TypeEnum;
  pkmns: IPokemon[] = [];
  filteredPkmns: any[] = [];
  listFilter = {
    Name: '',
    Type1: '',
    Type2: '',
  }

  performFilter() {
    this.filteredPkmns = this.pkmns.filter((item: any) =>
      item.Name.toLocaleLowerCase().includes(this.listFilter.Name.toLocaleLowerCase())
      && (
        item.Type1.toLocaleLowerCase().includes(this.listFilter.Type1.toLocaleLowerCase())
        || item.Type2.toLocaleLowerCase().includes(this.listFilter.Type1.toLocaleLowerCase())
      )
    )
  }

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pkmns = this.pokemonService.getPokemon();
    this.filteredPkmns = this.pkmns;
  }

}
