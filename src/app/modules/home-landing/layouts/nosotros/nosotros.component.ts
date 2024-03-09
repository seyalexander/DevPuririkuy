import { Component, Input } from '@angular/core';
import { nosotrosModel } from '../../../../core/models/landing-page/nosotros.model';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  @Input() dataNosotros: Array<nosotrosModel> = [];
}
