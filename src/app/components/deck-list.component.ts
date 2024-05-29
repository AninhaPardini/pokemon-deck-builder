import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {Deck, Type} from '../models/deck.model';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule
} from 'igniteui-angular';

@Component({
  selector: 'app-deck-list',
  standalone: true,
  imports: [CommonModule, RouterModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule],
  templateUrl: './deck-list.component.html',
})
export class DeckListComponent implements OnInit {
  decks: Deck[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadDecks();
  }

  loadDecks(): void {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
      this.decks = JSON.parse(storedDecks);
      this.decks.forEach(deck => {
        const types: Type[] = [];
        deck.cards.forEach(card => {
          card.types.forEach(type => {
            if (!types.find(t => t.name === type && t.image === card.images.small)) {
              types.push({ name: type, image: card.images.small, cards: [card] });
            }
          });
        });
        deck.types = types;
      });
    }
  }

  addDeck(): void {
    const newDeck: Deck = { id: Date.now(), name: '', cards: [], types: [] };
    this.decks.push(newDeck);
    this.saveDecks();
  }

  editDeck(deck: Deck): void {
    this.router.navigate(['/edit', deck.id]);
  }

  deleteDeck(deckId: number): void {
    this.decks = this.decks.filter(deck => deck.id !== deckId);
    this.saveDecks();
  }

  viewDeck(deckId: number): void {
    this.router.navigate(['/details', deckId]);
  }

  saveDecks(): void {
    localStorage.setItem('decks', JSON.stringify(this.decks));
  }
}
