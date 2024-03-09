import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulos-sections',
  standalone: true,
  imports: [],
  templateUrl: './titulos-sections.component.html',
  styleUrl: './titulos-sections.component.css'
})
export class TitulosSectionsComponent {
  @Input() textLeft: String = '';
  @Input() textRigth: String = '';
}
