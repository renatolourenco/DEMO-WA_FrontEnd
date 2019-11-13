import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBalloonComponent } from './options-balloon.component';

describe('OptionsBalloonComponent', () => {
  let component: OptionsBalloonComponent;
  let fixture: ComponentFixture<OptionsBalloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsBalloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
