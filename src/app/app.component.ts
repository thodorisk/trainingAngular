import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private firstSubscription!: Subscription;

  public ngOnInit(): void {
    const customObservable: Observable<number> = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 6) {
          observer.complete();
        }
        if (count > 4) {
          observer.error(new Error('Count is > 4!'));
        }
        count++;
      }, 1000);
    });


    this.firstSubscription = customObservable.pipe(
      filter((data: number) => data > 0), 
    ).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
