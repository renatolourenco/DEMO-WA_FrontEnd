import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChatHeaderComponent = class ChatHeaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() { }

    closeChatWindow() {
        this.dataService.setOpenChatWindow(false);
    }
    cleanDialog() {
        localStorage.removeItem('simple_advisor');
        this.dataService.cleanVariables();
        this.dataService.setOpenChatWindow(false);
    }
};
ChatHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-chat-header',
        templateUrl: './chat-header.component.html',
        styleUrls: ['./chat-header.component.css']
    })
], ChatHeaderComponent);
export { ChatHeaderComponent };
//# sourceMappingURL=chat-header.component.js.map