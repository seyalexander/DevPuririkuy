import { Component, Input } from '@angular/core';
import { serviciosModel } from '../../../../core/models/landing-page/servicios.model';
import { ServiciosTarjetaComponent } from '../../Components/servicios-tarjeta/servicios-tarjeta.component';
import { TitulosSectionsComponent } from '../../Components/texts/titulos-sections/titulos-sections.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    ServiciosTarjetaComponent,
    TitulosSectionsComponent
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  @Input() dataDatosServicios: Array<serviciosModel> = []

}
