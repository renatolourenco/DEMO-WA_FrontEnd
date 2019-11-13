import { async, TestBed } from '@angular/core/testing';
import { ChatMainButtonComponent } from './chat-main-button.component';
describe('ChatMainButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatMainButtonComponent]
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
//# sourceMappingURL=chat-main-button.component.spec.js.map