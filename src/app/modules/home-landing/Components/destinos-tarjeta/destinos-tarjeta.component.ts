import { Component, Input } from '@angular/core';
import { ButtonFillComponent } from '../buttons/button-fill/button-fill.component';

@Component({
  selector: 'app-destinos-tarjeta',
  standalone: true,
  imports: [ButtonFillComponent],
  templateUrl: './destinos-tarjeta.component.html',
  styleUrl: './destinos-tarjeta.component.css'
})
export class DestinosTarjetaComponent {
  @Input() destinoTours: String = '';
  @Input() detalleTours: String = '';
  @Input() visitasTours: String = '';
}
