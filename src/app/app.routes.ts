import { Routes } from '@angular/router';
import { DeckListComponent } from './components/deck-list.component';
import { DeckFormComponent } from './components/deck-form.component';

export const routes: Routes = [
  { path: '', component: DeckListComponent },
  { path: 'create', component: DeckFormComponent },
  { path: 'edit/:id', component: DeckFormComponent },
];