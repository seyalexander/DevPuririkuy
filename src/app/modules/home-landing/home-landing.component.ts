import { DestinosService } from './../../core/services/landing-page/destinos/destinos.service';
import { ServiciosService } from './../../core/services/landing-page/servicios/servicios.service';
import { Component } from '@angular/core';
import { ServiciosTarjetaComponent } from './Components/servicios-tarjeta/servicios-tarjeta.component';
import { DestinosTarjetaComponent } from './Components/destinos-tarjeta/destinos-tarjeta.component';
import { PromocionesTarjetaComponent } from './Components/promociones-tarjeta/promociones-tarjeta.component';
import { NosotrosTarjetasComponent } from './Components/nosotros-tarjetas/nosotros-tarjetas.component';
import { nosotrosModel } from '../../core/models/landing-page/nosotros.model';
import { Subscription } from 'rxjs';
import { NosotrosService } from '../../core/services/landing-page/nosotros/nosotros.service';
import { serviciosModel } from '../../core/models/landing-page/servicios.model';
import { destinoModel } from '../../core/models/landing-page/destino.model';
import { promocionesModel } from '../../core/models/landing-page/promociones.model';
import { PromocionesService } from '../../core/services/landing-page/promociones/promociones.service';
import { NavigateComponent } from '../../shared/navigate/navigate.component';
import { ServiciosComponent } from './layouts/servicios/servicios.component';
import { VentajasComponent } from './layouts/ventajas/ventajas.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DestinosComponent } from './layouts/destinos/destinos.component';
import { NosotrosComponent } from './layouts/nosotros/nosotros.component';
import { PromocionesComponent } from './layouts/promociones/promociones.component';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [
    ServiciosTarjetaComponent,
    DestinosTarjetaComponent,
    PromocionesTarjetaComponent,
    NosotrosTarjetasComponent,
    NavigateComponent,
    ServiciosComponent,
    VentajasComponent,
    FooterComponent,
    DestinosComponent,
    NosotrosComponent,
    PromocionesComponent
  ],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.css'
})
export class HomeLandingComponent {

  datosNosotros: Array<nosotrosModel> = [];
  datosServicios: Array<serviciosModel> = [];
  datosDestinos: Array<destinoModel> = [];
  datosPromociones: Array<promocionesModel> = [];


  listObservers$: Array<Subscription> = [];


  constructor(
    private nosotrosService: NosotrosService,
    private servicioService: ServiciosService,
    private destinosService: DestinosService,
    private promocionesService: PromocionesService
  ) { }

  ngOnInit(): void {
    const ObservarDatosNosotros = this.nosotrosService.datosNosotros$.subscribe(Response => {
      this.datosNosotros = Response
    })

    const ObservarDatosServicios = this.servicioService.datosSercicios$.subscribe(Response => {
      this.datosServicios = Response
    })

    const ObservarDatosDestinos = this.destinosService.datosDestinos$.subscribe(Response => {
      this.datosDestinos = Response
    })

    const ObservarDatosPromociones = this.promocionesService.datosPromociones$.subscribe(Response => {
      this.datosPromociones = Response
    })

    this.listObservers$ = [ObservarDatosNosotros]
    this.listObservers$ = [ObservarDatosServicios]
    this.listObservers$ = [ObservarDatosDestinos]
    this.listObservers$ = [ObservarDatosPromociones]
  }
}
