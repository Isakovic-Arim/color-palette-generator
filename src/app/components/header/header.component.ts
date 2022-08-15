import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header><h1 class="text-xl text-center font-medium mb-10">{{ text }}</h1></header>
  `
})
export class HeaderComponent {
  @Input() text = "";
}
