import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeSubscribers: string[] = ['Subscriber A', 'Subscriber B'];
  public inactiveSubscribers: string[] = ['Subscriber C', 'Subscriber D'];

  public onSetToInactive(subscriber: string): void {
    this.inactiveSubscribers.push(subscriber);
    this.activeSubscribers = this.activeSubscribers.filter(x => x !== subscriber);
  }

  public onSetToActive(subscriber: string): void {
    this.activeSubscribers.push(subscriber);
    this.inactiveSubscribers = this.inactiveSubscribers.filter(x => x !== subscriber);
  }
}
