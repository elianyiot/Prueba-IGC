import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() partidas = 0;
  @Input() premios = 0;
  @Input() compuerta = '';
  @Input() estado = '';
  @Input() sincronizacion!: Date;
  @Input() nombre = '';
  @Input() imagenUrl = ''; 
}
