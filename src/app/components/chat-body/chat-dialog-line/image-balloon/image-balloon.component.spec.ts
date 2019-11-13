import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBalloonComponent } from './image-balloon.component';

describe('ImageBalloonComponent', () => {
  let component: ImageBalloonComponent;
  let fixture: ComponentFixture<ImageBalloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBalloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
