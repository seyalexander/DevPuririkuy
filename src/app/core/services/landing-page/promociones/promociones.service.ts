import { Injectable } from '@angular/core';
import * as dataRaw from '../../../../data/data-landing/promociones.json'
import { Observable, of } from 'rxjs';
import { promocionesModel } from '../../../models/landing-page/promociones.model';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  private url: string = environment.urlApi

  datosPromociones$: Observable<promocionesModel[]> = of ([])

  // constructor() {
  //   const { data }: any = (dataRaw as any).default;
  //   this.datosPromociones$ = of (data)
  //  }

  constructor (private http: HttpClient) {}

  getNosotros(): Observable<promocionesModel[]> {
    this.datosPromociones$ = this.http.get<promocionesModel[]>(`${this.url}/Promociones`);
    return this.datosPromociones$;
  }
}
