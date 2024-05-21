import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Deck } from '../models/deck.model';
import { IgxButtonModule, IgxIconModule, IgxCardModule } from 'igniteui-angular';

@Component({
  selector: 'app-deck-list',
  standalone: true,
  imports: [CommonModule, RouterModule, IgxButtonModule, IgxIconModule, IgxCardModule],
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
    }
  }

  addDeck(): void {
    const newDeck: Deck = { id: Date.now(), name: '', cards: [] };
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