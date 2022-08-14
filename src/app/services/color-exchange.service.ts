import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../classes/palette';

@Injectable({
  providedIn: 'root'
})
export class ColorExchangeService {
  private colorSource = new BehaviorSubject<Palette>({content: []});
  color = this.colorSource.asObservable();

  changeColor(value: Palette) {
    this.colorSource.next(value);
  }
}
