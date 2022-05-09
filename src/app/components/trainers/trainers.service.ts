import { Injectable } from "@angular/core";
import { ITrainers } from "./trainers";

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  getTrainers(): ITrainers[] {
    return [
      {
        "number": 1,
        "name": "Trainer",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Trainer"
      },
      {
        "number": 2,
        "name": "Lass",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "None"
      },
      {
        "number": 3,
        "name": "Youngster",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "None"
      },
      {
        "number": 4,
        "name": "Swimmer",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "None"
      },
      {
        "number": 5,
        "name": "Jr Trainer 1",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Trainer"
      },
      {
        "number": 6,
        "name": "Jr Trainer 2",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Trainer"
      },
      {
        "number": 7,
        "name": "Cool Trainer 1",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Trainer"
      },
      {
        "number": 8,
        "name": "Cool Trainer 2",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Trainer"
      },
      {
        "number": 9,
        "name": "Fisherman",
        "type1": "Normal",
        "type2": "Water",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Collector"
      },
      {
        "number": 10,
        "name": "Bird Keeper",
        "type1": "Normal",
        "type2": "Flying",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Collector"
      },
      {
        "number": 11,
        "name": "Bug Catcher",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Collector"
      },
      {
        "number": 12,
        "name": "PokeManiac",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Support"
      },
      {
        "number": 13,
        "name": "Channeler",
        "type1": "Normal",
        "type2": "Psychic",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Support"
      },
      {
        "number": 14,
        "name": "Burglar",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Merchant"
      },
      {
        "number": 15,
        "name": "Gambler",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Merchant"
      },
      {
        "number": 16,
        "name": "Blackbelt",
        "type1": "Normal",
        "type2": "Fighting",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Crafter"
      },
      {
        "number": 17,
        "name": "Engineer",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Crafter"
      },
      {
        "number": 18,
        "name": "Scientist",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Crafter"
      },
      {
        "number": 19,
        "name": "Psychic",
        "type1": "Normal",
        "type2": "Psychic",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Researcher"
      },
      {
        "number": 20,
        "name": "Super Nerd",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Researcher"
      },
      {
        "number": 21,
        "name": "Teacher",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Researcher"
      },
      {
        "number": 22,
        "name": "Tamer",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Officer"
      },
      {
        "number": 23,
        "name": "Officer",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Officer"
      },
      {
        "number": 24,
        "name": "Cue Ball",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Grunt"
      },
      {
        "number": 25,
        "name": "Biker",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Grunt"
      },
      {
        "number": 26,
        "name": "Rocket",
        "type1": "Normal",
        "type2": "Poison",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Grunt"
      },
      {
        "number": 27,
        "name": "Gentleman",
        "type1": "Normal",
        "type2": "—",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Executive"
      },
      {
        "number": 28,
        "name": "Boss",
        "type1": "Normal",
        "type2": "Dark",
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "special": 100,
        "spcdef": 100,
        "speed": 100,
        "total": 600,
        "role": "Executive"
      }
    ]
  }
}