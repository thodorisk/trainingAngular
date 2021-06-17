import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-active-subscribers',
  templateUrl: './active-subscribers.component.html',
  styleUrls: ['./active-subscribers.component.scss']
})
export class ActiveSubscribersComponent implements OnInit {
  public subscribers: string[] = [];

  constructor(private subscribersService: SubscribersService) {}

  public ngOnInit(): void {
    this.subscribers = this.subscribersService.activeSubscribers;
  }

  public onSetToInactive(subscriber: string): void {
    this.subscribersService.setToInactive(subscriber);
  }
}
