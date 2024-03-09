import { promocionesTarjetaModel } from "./promociones-tarjeta.model";

export class promocionesModel {
  promocionesModel_id: String | number = 1;
  promocionesModel_titulo: String = '';
  promocionesModel_descripcion:  String = '';
  id_tarjeta_promociones: promocionesTarjetaModel[] = [];
}
