import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TextBalloonComponent = class TextBalloonComponent {
    constructor() { }
    ngOnInit() { }
    setBalloonType(balloonType) {
        this.type = `dc_chat_dialog_ballon-ballon_${balloonType}`;
    }
    setTxtMessage(text) {
        this.txtMsg = text;
    }
};
TextBalloonComponent = tslib_1.__decorate([
    Component({
        selector: 'dc-text-balloon',
        templateUrl: './text-balloon.component.html',
        styleUrls: ['./text-balloon.component.css']
    })
], TextBalloonComponent);
export { TextBalloonComponent };
//# sourceMappingURL=text-balloon.component.js.map