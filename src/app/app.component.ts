import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private firstObsSubscription!: Subscription;

  constructor() {
  }

  ngOnInit() {
    // 1) Create an observer that listens to interval observable.​

    // 2) Use the appropriate operator to log Second: … in the console.​

    // 3) Use the appropriate operator to log values < 5.​

    // 4) Use the appropriate operator to get a the first value that is emitted.​

    // 5) Use the appropriate operator to console a message before and after the emitted value.
    
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
