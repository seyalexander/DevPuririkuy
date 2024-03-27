import { Component, Input } from '@angular/core';
import { ButtonFillComponent } from '../../../buttons/button-fill/button-fill.component';

@Component({
  selector: 'app-otros-servicios-tarjeta',
  standalone: true,
  imports: [ButtonFillComponent],
  templateUrl: './otros-servicios-tarjeta.component.html',
  styleUrl: './otros-servicios-tarjeta.component.css'
})
export class OtrosServiciosTarjetaComponent {
  @Input() detalleTarjeta: String = ''
  @Input() precioTarjeta: String = ''
  @Input() lugaresTarjeta: String = ''
}
