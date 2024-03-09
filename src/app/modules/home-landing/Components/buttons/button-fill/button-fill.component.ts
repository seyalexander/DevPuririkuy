import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-fill',
  standalone: true,
  imports: [],
  templateUrl: './button-fill.component.html',
  styleUrl: './button-fill.component.css'
})
export class ButtonFillComponent {
  @Input() claseButton: String = "";
}
