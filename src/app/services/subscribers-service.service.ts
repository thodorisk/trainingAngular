import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  public activeSubscribers: string[] = ['Subscriber A', 'Subscriber B'];
  public inactiveSubscribers: string[] = ['Subscriber C', 'Subscriber D'];

  public setToInactive(subscriber: string): void {
    this.inactiveSubscribers.push(subscriber);
    this.activeSubscribers.splice(this.activeSubscribers.indexOf(subscriber), 1);
  }

  public setToActive(subscriber: string): void {
    this.activeSubscribers.push(subscriber);
    this.inactiveSubscribers.splice(this.inactiveSubscribers.indexOf(subscriber), 1);
  }
}
