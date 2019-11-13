import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { ChatAvatarComponent } from './components/chat-body/chat-dialog-line/chat-avatar/chat-avatar.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatDialogLineComponent } from './components/chat-body/chat-dialog-line/chat-dialog-line.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatInputTextComponent } from './components/chat-input-text/chat-input-text.component';
import { ChatMainButtonComponent } from './components/chat-main-button/chat-main-button.component';
import { TextBalloonComponent } from './components/chat-body/chat-dialog-line/text-balloon/text-balloon.component';
import { ConnectionService } from './services/connection/connection.service';
import { DataService } from './services/data/data.service';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ChatAvatarComponent,
            ChatBodyComponent,
            ChatDialogLineComponent,
            ChatHeaderComponent,
            ChatInputTextComponent,
            ChatMainButtonComponent,
            TextBalloonComponent
        ],
        entryComponents: [
            ChatAvatarComponent,
            ChatDialogLineComponent,
            TextBalloonComponent
        ],
        imports: [
            AppRoutingModule,
            BrowserModule,
            HttpClientModule
        ],
        providers: [
            ConnectionService,
            CookieService,
            DataService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map