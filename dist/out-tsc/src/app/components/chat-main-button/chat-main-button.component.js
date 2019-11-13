import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChatMainButtonComponent = class ChatMainButtonComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() { }
    openChatWindow() {
        this.dataService.setOpenChatWindow(true);
    }
};
ChatMainButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-chat-main-button',
        templateUrl: './chat-main-button.component.html',
        styleUrls: ['./chat-main-button.component.css']
    })
], ChatMainButtonComponent);
export { ChatMainButtonComponent };
//# sourceMappingURL=chat-main-button.component.js.map