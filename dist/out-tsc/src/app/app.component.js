import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'simple-chat-front';
        this.showChatWindow = false;
    }
    ngOnInit() {
        this.dataService.openChatWindow.subscribe(open => {
            this.showChatWindow = open;
        });
        this.dataService.updateScroll.subscribe(() => {
            this.updateScroll();
        });
    }
    updateScroll() {
        const chatBody = document.getElementById('dc_chat_body');
        setTimeout(() => {
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 250);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map