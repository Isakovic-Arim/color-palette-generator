import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorExchangeService } from 'src/app/services/color-exchange.service';
import { MessageExchangeService } from 'src/app/services/message-exchange.service';

@Component({
  selector: 'app-option-color',
  template: `
    <div class="w-36 h-52 m-2 p-2 rounded-md bg-white hover:font-medium">
      <button (click)="getCode()" cdkCopyToClipboard="{{code}}" [ngStyle]="{'background-color':this.code}" class="w-32 h-40 rounded-sm"></button>
      <p class="text-center mt-1">{{code}}</p>
    </div>
  `
})

export class OptionColorComponent implements OnInit {
  @Input() code = "#";
  @Input() index = 0;

  constructor(private input: ColorExchangeService, private message: MessageExchangeService) {}
  
  ngOnInit() : void {
    this.input.color.subscribe(value => {
      this.code = "#";
      this.code += value.content[this.index];
    });
  }

  getCode() {
    this.message.changeMessage(this.code);
  }
}
