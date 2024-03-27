import { Component, Input } from '@angular/core';
import { TitulosSectionsComponent } from '../../../texts/titulos-sections/titulos-sections.component';

@Component({
  selector: 'app-otros-servicios-header',
  standalone: true,
  imports: [TitulosSectionsComponent],
  templateUrl: './otros-servicios-header.component.html',
  styleUrl: './otros-servicios-header.component.css'
})
export class OtrosServiciosHeaderComponent {
  @Input() textoDetalle: String = '';
}
