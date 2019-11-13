import { async, TestBed } from '@angular/core/testing';
import { ChatAvatarComponent } from './chat-avatar.component';
describe('ChatAvatarComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatAvatarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-avatar.component.spec.js.map