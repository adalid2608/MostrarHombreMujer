import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hombreMujer';
  mostrarMujer:boolean = false;
  mostrarHombre:boolean = false;
}
