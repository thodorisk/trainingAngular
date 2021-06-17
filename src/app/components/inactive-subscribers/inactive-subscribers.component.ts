import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-subscribers',
  templateUrl: './inactive-subscribers.component.html',
  styleUrls: ['./inactive-subscribers.component.scss']
})
export class InactiveSubscribersComponent {
  @Input() subscribers: string[] = [];
  @Output() subscriberSetToActive: EventEmitter<string> = new EventEmitter<string>();

  public onSetToActive(subscriber: string): void {
    this.subscriberSetToActive.emit(subscriber);
  }
}
