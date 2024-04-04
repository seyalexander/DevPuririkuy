import { DestinosService } from './../../core/services/landing-page/destinos/destinos.service';
import { ServiciosService } from './../../core/services/landing-page/servicios/servicios.service';
import { Component } from '@angular/core';
import { ServiciosTarjetaComponent } from './Components/targets/servicios/servicios-tarjeta/servicios-tarjeta.component';
import { DestinosTarjetaComponent } from './Components/targets/destinos/destinos-tarjeta/destinos-tarjeta.component';import { PromocionesTarjetaComponent } from './Components/targets/promociones/promociones-tarjeta/promociones-tarjeta.component';
import { nosotrosModel } from '../../core/models/landing-page/nosotros.model';
import { Observable, of, Subscription } from 'rxjs';
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
import { OtrosServiciosComponent } from './layouts/otros-servicios/otros-servicios.component';
import { ContactoComponent } from './layouts/contacto/contacto.component';
import { VentajasService } from '../../core/services/landing-page/ventajas/ventajas.service';
import { OtrosServiciosService } from '../../core/services/landing-page/otrosServicios/otros-servicios.service';
import { ventajasModel } from '../../core/models/landing-page/ventajas.model';
import { otrosServiciosModel } from '../../core/models/landing-page/otrosServicios.model';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [
    ServiciosTarjetaComponent,
    DestinosTarjetaComponent,
    NavigateComponent,
    ServiciosComponent,
    VentajasComponent,
    FooterComponent,
    DestinosComponent,
    NosotrosComponent,
    PromocionesComponent,
    OtrosServiciosComponent,
    ContactoComponent
  ],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.css'
})
export class HomeLandingComponent {

  datosNosotros: Array<nosotrosModel> = [];
  datosServicios: Array<serviciosModel> = [];
  datosDestinos: Array<destinoModel> = [];
  datosPromociones: Array<promocionesModel> = [];
  datosVentajas: Array<ventajasModel> = [];
  datosOtrosServicios: Array<otrosServiciosModel> = [];
  listObservers$: Array<Subscription> = [];


  constructor(
    private nosotrosService: NosotrosService,
    private servicioService: ServiciosService,
    private destinosService: DestinosService,
    private promocionesService: PromocionesService,
    private ventajasService: VentajasService,
    private otrosServiciosService: OtrosServiciosService
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

    const ObservarDatosVentajas = this.ventajasService.datosVentajas$.subscribe(Response => {
      this.datosVentajas = Response
    })

    const ObservarDatosOtrosServicios = this.otrosServiciosService.datosOtrosServicios$.subscribe(Response => {
      this.datosOtrosServicios = Response
    })

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(subscription => subscription.unsubscribe());
  }
}
