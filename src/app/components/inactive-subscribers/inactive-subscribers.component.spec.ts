import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveSubscribersComponent } from './inactive-subscribers.component';

describe('InactiveSubscriberComponent', () => {
  let component: InactiveSubscribersComponent;
  let fixture: ComponentFixture<InactiveSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
