export interface IPokemon {
  Number: number;
  Name: string;
  HD: number;
  Hp: number;
  Type1: string;
  Type2: string;
  Health: number;
  Attack: number;
  Defense: number;
  Special: number;
  SplDef: number;
  Speed: number;
  Hp__1: number,
  Atk: number,
  Def: number,
  Spl: number,
  SDf: number,
  Spd: number,
}

export enum TypeEnum {
  Normal = "Normal",
  Fighting = "Fighting",
  Flying = "Flying",
  Poison = "Poison",
  Ground = "Ground",
  Rock = "Rock",
  Bug = "Bug",
  Ghost = "Ghost",
  Steel = "Steel",
  Fire = "Fire",
  Water = "Water",
  Grass = "Grass",
  Electric = "Electric",
  Psychic = "Psychic",
  Ice = "Ice",
  Dragon = "Dragon",
  Dark = "Dark",
  Fairy = "Fairy",
}