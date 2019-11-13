import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBalloonComponent } from './text-balloon.component';

describe('TextBalloonComponent', () => {
  let component: TextBalloonComponent;
  let fixture: ComponentFixture<TextBalloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBalloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
