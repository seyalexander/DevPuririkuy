import { otrosServiciosItemModel } from "./otrosServiciosItem.model";

export class otrosServiciosModel {
  otrosServiciosModel_Id: string | number = 1;
  otrosServiciosModel_Descripcion: string = '';
  otrosServiciosModel_Items: Array<otrosServiciosItemModel[]> = [];
}
