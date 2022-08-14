import { Component } from '@angular/core';
import { Palette } from './classes/palette';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  palette: Palette = new Palette();
}
