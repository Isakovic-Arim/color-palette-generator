import { Component, HostListener, OnInit } from '@angular/core';
import { Palette } from 'src/app/classes/palette';
import { ColorExchangeService } from 'src/app/services/color-exchange.service';

@Component({
  selector: 'app-button-generate',
  template: `
    <button (click)="changeColors()" (keyup.Space)="changeColors()" class="w-60 h-10 bg-violet-500 text-xs text-white rounded-sm">Generate palette</button>
  `
})
export class ButtonGenerateComponent implements OnInit {
  constructor(private input: ColorExchangeService) {}

  ngOnInit(): void {
    this.changeColors();
  }
  
  changeColors() {
    var url = " https://cors-everywhere.herokuapp.com/http://colormind.io/api/";
    var data = {
      x: null,
      model : "default",
      input : ["N","N","N","N","N"]
    }

    let palette: Palette = new Palette();

    var http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if(http.readyState == 4 && http.status == 200) {
        var output: number[][] = JSON.parse(http.responseText).result;

        let code;
        let hex;
        for (let i = 0; i < 5; i++) {
          code = "";

          for (let j = 0; j < 3; j++) {
            hex = output[i][j].toString(16);
            if (hex.length == 1) {
              hex = "0" + hex;
            }
            code += hex;
          }

          palette.content[i] = code;
        }

        this.input.changeColor(palette);
      }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }

  @HostListener('document:keyup.space') activate() {
    this.changeColors();
  }
}
