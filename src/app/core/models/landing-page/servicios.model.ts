import { servicioTarjetaModel } from "./servicios-tarjeta.model";

export class serviciosModel {
  id_item_servicios: String | number = '';
  titulo_servicios: String = '';
  texto_Detalle: String = '';
  id_tarjeta_servicio: servicioTarjetaModel[] = []
}
