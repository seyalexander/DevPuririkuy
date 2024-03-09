import { Injectable } from '@angular/core';
import * as dataRaw from '../../../../data/data-landing/servicios.json'
import { serviciosModel } from '../../../models/landing-page/servicios.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  datosSercicios$: Observable<serviciosModel[]> = of ([])

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.datosSercicios$ = of (data)
   }
}
