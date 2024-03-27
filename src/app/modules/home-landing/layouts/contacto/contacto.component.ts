import { Component, Input } from '@angular/core';
import { contactoModel } from '../../../../core/models/landing-page/contacto.model';
import { ButtonFillComponent } from '../../Components/buttons/button-fill/button-fill.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ButtonFillComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @Input() dataDestinos: Array<contactoModel> = [];
}
