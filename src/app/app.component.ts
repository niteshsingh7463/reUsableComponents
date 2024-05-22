import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TootipComponent } from './tootip/tootip.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TootipComponent,ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modal-tooltip';
}
