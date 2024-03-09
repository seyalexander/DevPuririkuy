import { Component } from '@angular/core';
import { PromocionesTarjetaComponent } from '../../Components/promociones-tarjeta/promociones-tarjeta.component';
import { TitulosSectionsComponent } from '../../Components/texts/titulos-sections/titulos-sections.component';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [
    PromocionesTarjetaComponent,
    TitulosSectionsComponent
  ],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {

}
