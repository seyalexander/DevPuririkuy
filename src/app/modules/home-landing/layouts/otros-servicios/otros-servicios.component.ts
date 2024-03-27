import { Component } from '@angular/core';
import { ServiciosHeaderComponent } from '../../Components/targets/servicios/servicios-header/servicios-header.component';
import { OtrosServiciosHeaderComponent } from '../../Components/targets/otros-servicios/otros-servicios-header/otros-servicios-header.component';
import { OtrosServiciosTarjetaComponent } from '../../Components/targets/otros-servicios/otros-servicios-tarjeta/otros-servicios-tarjeta.component';

@Component({
  selector: 'app-otros-servicios',
  standalone: true,
  imports: [ OtrosServiciosHeaderComponent, OtrosServiciosTarjetaComponent],
  templateUrl: './otros-servicios.component.html',
  styleUrl: './otros-servicios.component.css'
})
export class OtrosServiciosComponent {

}
