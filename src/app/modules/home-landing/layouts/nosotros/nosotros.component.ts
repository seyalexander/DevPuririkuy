import { Component, Input } from '@angular/core';
import { nosotrosModel } from '../../../../core/models/landing-page/nosotros.model';
import { NosotrosTarjetasComponent } from '../../Components/targets/nosotros/nosotros-tarjetas/nosotros-tarjetas.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NosotrosTarjetasComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  @Input() dataNosotros: Array<nosotrosModel> = [];

}
