import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../../data/data-landing/destino.json'
import { destinoModel } from '../../../models/landing-page/destino.model';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  datosDestinos$: Observable<destinoModel[]> = of ([])

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.datosDestinos$ = of (data)
   }
}
