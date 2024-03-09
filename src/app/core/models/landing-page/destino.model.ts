import { destinoTarjetaModel } from './destino-tarjeta.model';
export class destinoModel {
  destinoModel_id: String | number = '';
  destinoModel_titulo: String = '';
  destinoModel_detalle: String = '';
  idDestinoTarjeta: destinoTarjetaModel[] = [];
}
