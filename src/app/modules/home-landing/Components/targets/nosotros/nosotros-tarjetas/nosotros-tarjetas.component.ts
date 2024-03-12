import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nosotros-tarjetas',
  standalone: true,
  imports: [],
  templateUrl: './nosotros-tarjetas.component.html',
  styleUrl: './nosotros-tarjetas.component.css'
})
export class NosotrosTarjetasComponent {
  @Input() nosotrosClaseImagen: String = '';
  @Input() nosotrosTitulo: String = '';
  @Input() nosotrosParrafo: String = '';
}
