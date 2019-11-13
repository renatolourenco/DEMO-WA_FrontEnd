import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingBalloonComponent } from './typing-balloon.component';

describe('TypingBalloonComponent', () => {
  let component: TypingBalloonComponent;
  let fixture: ComponentFixture<TypingBalloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingBalloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
