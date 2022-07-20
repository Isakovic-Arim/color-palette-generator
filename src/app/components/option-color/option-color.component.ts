import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-color',
  template: `
    <div class="w-32 h-52 m-2 p-2 rounded-md bg-white">
      <div class="bg-black w-28 h-40 rounded-sm">
      </div>
      <p class="text-center mt-1">{{code}}</p>
    </div>
  `
})
export class OptionColorComponent {
  @Input() code = "";
}
