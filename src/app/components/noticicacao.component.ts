import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg notificacao">
      {{ message }}
    </div>
  `,
  styles: [`
    .notificacao {
      opacity: 1;
      transition: opacity 0.5s;
    }
    .notificacao.fade-out {
      opacity: 0;
    }
  `]
})
export class NotificacaoComponent {
  message: string | null = null;

  show(message: string): void {
    this.message = message;
    setTimeout(() => {
      this.message = null;
    }, 3000); // Oculta a mensagem após 3 segundos
  }
}