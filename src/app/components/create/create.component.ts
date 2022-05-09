import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'dl-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  pkmns: IPokemon[] = [];
  pkmn: any;
  pkmnNo = 25;
  lv: any;
  def?: number;
  res?: number;
  getPkmn(num:number) {
    if (num < 152 && num > 0) {
      this.pkmn = this.pkmns[num-1];
      this.lv = this.pkmns[num-1].HD
      this.getDef(num);
      this.getRes(num);
    }
  }
  getDef(num:any) {
    // if (num < 152 && num > 0) {
      this.def = (10 + this.pkmns[num-1].Def + Math.floor(this.lv/2));
    // }
  }
  getRes(num:any) {
    if (num < 152 && num > 0) {
      this.res = 10 + this.pkmns[num-1].SDf + Math.floor(this.lv/2);
    // } else { return 0 }
    }
  }

  increment() {
    
  }

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pkmns = this.pokemonService.getPokemon();
    this.getPkmn(25)
  }

}
