import { Injectable } from '@angular/core';
import * as dataRaw from '../../../../data/data-landing/nosotros.json'
import { Observable, of } from 'rxjs';
import { nosotrosModel } from '../../../models/landing-page/nosotros.model';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  datosNosotros$: Observable<nosotrosModel[]> = of ([])

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.datosNosotros$ = of (data)
   }
}
