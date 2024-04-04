import { Injectable } from '@angular/core';
import * as dataRaw from '../../../../data/data-landing/servicios.json'
import { serviciosModel } from '../../../models/landing-page/servicios.model';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url: string = environment.urlApi

  datosSercicios$: Observable<serviciosModel[]> = of ([])

  // constructor() {
  //   const { data }: any = (dataRaw as any).default;
  //   this.datosSercicios$ = of (data)
  //  }

  constructor(private http: HttpClient){}

  getServicios(): Observable<serviciosModel[]> {
    this.datosSercicios$ = this.http.get<serviciosModel[]>(`${this.url}/servicios`);
    return this.datosSercicios$;
  }
}
