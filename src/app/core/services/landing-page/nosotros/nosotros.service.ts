import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataRaw from '../../../../data/data-landing/nosotros.json'
import { Observable, of } from 'rxjs';
import { nosotrosModel } from '../../../models/landing-page/nosotros.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  private url: string = 'http://localhost:8090/Puririkuy'



  datosNosotros$: Observable<nosotrosModel[]> = of([])

  // constructor() {
  //   const { data }: any = (dataRaw as any).default;
  //   this.datosNosotros$ = of (data)
  //  }

  constructor(private http: HttpClient) { }


  getNosotros(): Observable<nosotrosModel[]> {
    this.datosNosotros$ = this.http.get<nosotrosModel[]>(`${this.url}/MostrarNosotrosObjetivos`);
    return this.datosNosotros$;
  }

}
