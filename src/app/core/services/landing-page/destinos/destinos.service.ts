import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../../data/data-landing/destino.json'
import { destinoModel } from '../../../models/landing-page/destino.model';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  private url:string = environment.urlApi

  datosDestinos$: Observable<destinoModel[]> = of ([])

  // constructor() {
  //   const { data }: any = (dataRaw as any).default;
  //   this.datosDestinos$ = of (data)
  //  }

  constructor(private http: HttpClient){}

  getDestinos(): Observable<destinoModel[]>{
    this.datosDestinos$ = this.http.get<destinoModel[]>(`${this.url}/destinos`);
    return this.datosDestinos$;
  }

}
