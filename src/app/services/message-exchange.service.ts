import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageExchangeService {
  private messageSource = new BehaviorSubject<string>("");
  message = this.messageSource.asObservable();

  changeMessage(value: string) {
    this.messageSource.next(value);
  }
}
