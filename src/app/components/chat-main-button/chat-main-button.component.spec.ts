import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMainButtonComponent } from './chat-main-button.component';

describe('ChatMainButtonComponent', () => {
  let component: ChatMainButtonComponent;
  let fixture: ComponentFixture<ChatMainButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMainButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
