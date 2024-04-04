import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { otrosServiciosModel } from '../../../models/landing-page/otrosServicios.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtrosServiciosService {

  private url: string = environment.urlApi

  datosOtrosServicios$: Observable<otrosServiciosModel[]> = of([])

  constructor( private http: HttpClient) { }

  getOtrosServicios(): Observable<otrosServiciosModel[]> {
    this.datosOtrosServicios$ = this.http.get<otrosServiciosModel[]>(`${this.url}/otrosServicios`)
    return this.datosOtrosServicios$;
  }
}
