import { Injectable } from '@angular/core';
import * as dataRaw from '../../../../data/data-landing/promociones.json'
import { Observable, of } from 'rxjs';
import { promocionesModel } from '../../../models/landing-page/promociones.model';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  datosPromociones$: Observable<promocionesModel[]> = of ([])

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.datosPromociones$ = of (data)
   }
}
