import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck.model';
import { CommonModule } from '@angular/common';
import { IgxButtonModule, IgxIconModule, IgxCardModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deck-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, IgxButtonModule, IgxIconModule, IgxCardModule],
  templateUrl: './deck-list.component.html',
})
export class DeckListComponent implements OnInit {
  decks: Deck[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadDecks();
  }

  loadDecks(): void {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
      this.decks = JSON.parse(storedDecks);
    }
  }

  saveDecks(): void {
    localStorage.setItem('decks', JSON.stringify(this.decks));
  }

  addDeck(): void {
    const newDeck: Deck = { id: Date.now(), name: '', cards: [] };
    this.decks.push(newDeck);
    this.router.navigate(['/edit', newDeck.id]);
  }

  editDeck(deck: Deck): void {
    this.router.navigate(['/edit', deck.id]);
  }

  deleteDeck(deckId: number): void {
    this.decks = this.decks.filter(deck => deck.id !== deckId);
    this.saveDecks();
  }

  viewDeck(deckId: number): void {
    this.router.navigate(['/edit', deckId]);
  }
}