import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ventajasModel } from '../../../models/landing-page/ventajas.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentajasService {

  private url: string = environment.urlApi

  datosVentajas$: Observable<ventajasModel[]> = of([])

  constructor( private http: HttpClient) { }

  getVentajas(): Observable<ventajasModel[]> {
    this.datosVentajas$ = this.http.get<ventajasModel[]>(`${this.url}/ventajas`)
    return this.datosVentajas$;
  }
}
