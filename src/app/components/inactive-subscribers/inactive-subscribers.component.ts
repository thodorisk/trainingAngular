import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-inactive-subscribers',
  templateUrl: './inactive-subscribers.component.html',
  styleUrls: ['./inactive-subscribers.component.scss']
})
export class InactiveSubscribersComponent implements OnInit {
  public subscribers: string[] = [];

  constructor(private subscribersService: SubscribersService) {}

  public ngOnInit(): void {
    this.subscribers = this.subscribersService.inactiveSubscribers;
  }

  onSetToActive(subscriber: string) {
    this.subscribersService.setToActive(subscriber);
  }
}
