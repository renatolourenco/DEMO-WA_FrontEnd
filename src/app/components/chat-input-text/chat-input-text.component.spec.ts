import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputTextComponent } from './chat-input-text.component';

describe('ChatInputTextComponent', () => {
  let component: ChatInputTextComponent;
  let fixture: ComponentFixture<ChatInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
