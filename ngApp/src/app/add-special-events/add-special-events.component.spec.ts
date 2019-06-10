import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialEventsComponent } from './add-special-events.component';

describe('AddSpecialEventsComponent', () => {
  let component: AddSpecialEventsComponent;
  let fixture: ComponentFixture<AddSpecialEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecialEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
