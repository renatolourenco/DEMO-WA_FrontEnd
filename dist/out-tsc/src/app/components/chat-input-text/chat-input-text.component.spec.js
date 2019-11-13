import { async, TestBed } from '@angular/core/testing';
import { ChatInputTextComponent } from './chat-input-text.component';
describe('ChatInputTextComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatInputTextComponent]
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
//# sourceMappingURL=chat-input-text.component.spec.js.map