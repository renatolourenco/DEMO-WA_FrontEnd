import * as tslib_1 from "tslib";
import { Injectable, Output, EventEmitter } from '@angular/core';
let DataService = class DataService {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.message = new EventEmitter();
        this.openChatWindow = new EventEmitter();
        this.updateScroll = new EventEmitter();
        this.context = null;
        this.dialogArray = [];
    }
    setDialogMessage(msg) {
        this.message.emit(msg);
        this.dialogArray.push(msg);
        localStorage.setItem('test', JSON.stringify(this.dialogArray));
        this.setUpdateScroll();
    }
    cleanVariables() {
        this.context = null;
        this.dialogArray = [];
    }
    sendMessageToWatson(msg) {
        let watsonObj = {
            context: this.context,
            input: msg['user_text']
        };
        if (msg['user_text'] !== '') {
            this.setDialogMessage({ 'user': msg['user_text'] });
        }
        this.connectionService.watson(watsonObj).subscribe(res => {
            this.dialogArray[0] = { 'context': res['context'] };
            this.context = res['context'];
            this.setDialogMessage({ 'bot': res['output']['generic'] });
        });
    }
    setOpenChatWindow(open) {
        this.openChatWindow.emit(open);
    }
    setUpdateScroll() {
        this.updateScroll.emit(true);
    }
    startDialog() {
        let savedData = [];
        savedData = JSON.parse(localStorage.getItem('test'));
        if (savedData) {
            savedData.forEach(dialog => {
                if (dialog['context']) {
                    this.context = dialog['context'];
                    this.dialogArray[0] = { 'context': dialog['context'] };
                }
                else {
                    this.setDialogMessage(dialog);
                }
            });
        }
        else {
            this.sendMessageToWatson({ 'user_text': '' });
        }
    }
};
tslib_1.__decorate([
    Output()
], DataService.prototype, "message", void 0);
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map