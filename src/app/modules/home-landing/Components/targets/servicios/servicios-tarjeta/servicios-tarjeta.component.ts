import { Component, Input } from '@angular/core';
import { ButtonFillComponent } from '../../../buttons/button-fill/button-fill.component';

@Component({
  selector: 'app-servicios-tarjeta',
  standalone: true,
  imports: [ButtonFillComponent],
  templateUrl: './servicios-tarjeta.component.html',
  styleUrl: './servicios-tarjeta.component.css'
})
export class ServiciosTarjetaComponent {
  @Input() detalleTarjeta: String = ''
  @Input() precioTarjeta: String = ''
  @Input() lugaresTarjeta: String = ''
}
