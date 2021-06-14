import { Component } from '@angular/core';
import { IExample, IExampleWithOptional } from './interfaces/examples.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onButtonClicked(): void {
    alert('header button was clicked');
  }

  public testInterfaces(id: number, name: string): IExample {
    return {
      id: id,
      name: name
    }
  }
}
