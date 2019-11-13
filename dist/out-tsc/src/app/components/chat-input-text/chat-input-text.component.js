import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChatInputTextComponent = class ChatInputTextComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.dataService.startDialog();
    }
    sendTxt(text) {
        if (text !== '') {
            this.dataService.sendMessageToWatson({ 'user_text': text });
        }
    }
};
ChatInputTextComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-chat-input-text',
        templateUrl: './chat-input-text.component.html',
        styleUrls: ['./chat-input-text.component.css']
    })
], ChatInputTextComponent);
export { ChatInputTextComponent };
//# sourceMappingURL=chat-input-text.component.js.map