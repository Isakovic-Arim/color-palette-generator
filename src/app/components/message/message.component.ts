import { Component, Input, OnInit } from '@angular/core';
import { MessageExchangeService } from 'src/app/services/message-exchange.service';

@Component({
  selector: 'app-message',
  template: `
  <div [ngStyle]="{'display':display}" class="text-center">
    <span class="text-white bg-black font-light text-sm py-2 px-5 rounded-full">
      Color {{code}} copied to your clipboard
    </span>
  </div>
  `
})
export class MessageComponent implements OnInit {
  @Input() code = "";
  @Input() display = "block";

  constructor(private message: MessageExchangeService) { }

  ngOnInit(): void {
    this.message.message.subscribe(value => {
      this.show(value);
    });
  }

  show(value: string) {
    this.display = "block";
    this.code = value;
    setTimeout(() => {
      this.display = "none";
    }, 1000);
  }
}
