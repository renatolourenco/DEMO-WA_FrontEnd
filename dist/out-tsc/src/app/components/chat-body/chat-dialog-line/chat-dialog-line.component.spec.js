import { async, TestBed } from '@angular/core/testing';
import { ChatDialogLineComponent } from './chat-dialog-line.component';
describe('ChatDialogLineComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatDialogLineComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatDialogLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-dialog-line.component.spec.js.map