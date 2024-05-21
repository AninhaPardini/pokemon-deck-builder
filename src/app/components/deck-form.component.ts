import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card, Deck } from '../models/deck.model';
import { IgxButtonModule, IgxIconModule, IgxCardModule } from 'igniteui-angular';
import { PokemonService } from '../service/pokemon.service';
import { NotificacaoComponent } from './noticicacao.component';

@Component({
  selector: 'app-deck-form',
  standalone: true,
  imports: [CommonModule, FormsModule, IgxButtonModule, IgxIconModule, IgxCardModule, NotificacaoComponent],
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.css']
})
export class DeckFormComponent implements OnInit {
  @ViewChild(NotificacaoComponent) notificacao!: NotificacaoComponent;

  deck: Deck = { id: 0, name: '', cards: [] };
  cards: Card[] = [];
  deckId: number | null = null;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonService.getCards().subscribe(data => {
      this.cards = data.data;
    });

    this.route.paramMap.subscribe(params => {
      this.deckId = Number(params.get('id'));
      if (this.deckId) {
        this.loadDeck();
      }
    });
  }

  loadDeck(): void {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
      const decks: Deck[] = JSON.parse(storedDecks);
      const foundDeck = decks.find(deck => deck.id === this.deckId);
      if (foundDeck) {
        this.deck = foundDeck;
      }
    }
  }

  saveDeck(): void {
    const storedDecks = localStorage.getItem('decks');
    let decks: Deck[] = [];
    if (storedDecks) {
      decks = JSON.parse(storedDecks);
    }

    if (this.deckId) {
      const deckIndex = decks.findIndex(deck => deck.id === this.deckId);
      if (deckIndex !== -1) {
        decks[deckIndex] = this.deck;
      }
    } else {
      this.deck.id = Date.now();
      decks.push(this.deck);
    }

    localStorage.setItem('decks', JSON.stringify(decks));
    this.router.navigate(['/']);
  }

  addCard(card: Card): void {
    if (this.deck.cards.filter(c => c.name === card.name).length < 4) {
      this.deck.cards.push(card);
      this.notificacao.show(`Carta "${card.name}" adicionada ao baralho!`);
    } else {
      this.notificacao.show(`Você já tem 4 cartas "${card.name}" no baralho.`);
    }
  }

  removeCard(card: Card): void {
    this.deck.cards = this.deck.cards.filter(c => c.id !== card.id);
    this.notificacao.show(`Carta "${card.name}" removida do baralho!`);
  }
}