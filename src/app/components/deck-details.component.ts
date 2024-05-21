import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '../models/deck.model';
import { CommonModule } from '@angular/common';
import { IgxButtonModule, IgxIconModule, IgxCardModule } from 'igniteui-angular';

@Component({
  selector: 'app-deck-details',
  standalone: true,
  imports: [CommonModule, IgxButtonModule, IgxIconModule, IgxCardModule],
  templateUrl: './deck-details.component.html',
})
export class DeckDetailsComponent implements OnInit {
  deck: Deck | null = null;
  deckId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.deckId = Number(params.get('id'));
      this.loadDeck();
    });
  }

  loadDeck(): void {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
      const decks: Deck[] = JSON.parse(storedDecks);
      this.deck = decks.find(deck => deck.id === this.deckId) || null;
    }
  }

  editDeck(): void {
    this.router.navigate(['/edit', this.deckId]);
  }
}