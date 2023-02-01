export interface IPokemonListItem {
  name: string;
  url: string;
}

export interface IPokemonsList {
  count: number;
  next: string;
  previous: string;
  results: IPokemonListItem[];
}
