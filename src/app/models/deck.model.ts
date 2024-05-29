export interface Card {
  id: string;
  name: string;
  supertype: string;
  types: string[];
  images: {
    small: string;
    large: string;
  };
}

export interface Type {
  name: string;
  image: string;
  cards: Card[];
}

export interface Deck {
  id: number;
  name: string;
  cards: Card[];
  types: Type[];
}
