import { Component, Input } from '@angular/core';
import { destinoModel } from '../../../../core/models/landing-page/destino.model';
import { DestinosTarjetaComponent } from '../../Components/targets/destinos/destinos-tarjeta/destinos-tarjeta.component';

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [DestinosTarjetaComponent],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  @Input() dataDestinos: Array<destinoModel> = [];
}
