import { Component, Input } from '@angular/core';
import { TitulosSectionsComponent } from '../../../texts/titulos-sections/titulos-sections.component';

@Component({
  selector: 'app-servicios-header',
  standalone: true,
  imports: [TitulosSectionsComponent],
  templateUrl: './servicios-header.component.html',
  styleUrl: './servicios-header.component.css'
})
export class ServiciosHeaderComponent {
 @Input() textoDetalle: String = '';

}
