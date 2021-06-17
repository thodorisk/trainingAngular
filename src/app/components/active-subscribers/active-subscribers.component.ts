import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-subscribers',
  templateUrl: './active-subscribers.component.html',
  styleUrls: ['./active-subscribers.component.scss']
})
export class ActiveSubscribersComponent {
  @Input() subscribers: string[] = [];
  @Output() subscriberSetToInactive: EventEmitter<string> = new EventEmitter<string>();

  public onSetToInactive(subscriber: string): void {
    this.subscriberSetToInactive.emit(subscriber);
  }
}
