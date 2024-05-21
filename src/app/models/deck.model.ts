export interface Card {
  id: string;
  name: string;
  supertype: string;
  types: string[];
  // Outros atributos
}

export interface Deck {
  id: number;
  name: string;
  cards: Card[];
}