import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './safe.pipe';

import { ChatAvatarComponent } from './components/chat-body/chat-dialog-line/chat-avatar/chat-avatar.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatDialogLineComponent } from './components/chat-body/chat-dialog-line/chat-dialog-line.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatInputTextComponent } from './components/chat-input-text/chat-input-text.component';
import { ChatMainButtonComponent } from './components/chat-main-button/chat-main-button.component';
import { ChatModalComponent } from './components/chat-modal/chat-modal.component';
import { ImageBalloonComponent } from './components/chat-body/chat-dialog-line/image-balloon/image-balloon.component';
import { OptionsBalloonComponent } from './components/chat-body/chat-dialog-line/options-balloon/options-balloon.component';
import { TextBalloonComponent } from './components/chat-body/chat-dialog-line/text-balloon/text-balloon.component';
import { TypingBalloonComponent } from './components/chat-body/chat-dialog-line/typing-balloon/typing-balloon.component';

import { ConnectionService } from './services/connection/connection.service';
import { DataService } from './services/data/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatAvatarComponent,
    ChatBodyComponent,
    ChatDialogLineComponent,
    ChatHeaderComponent,
    ChatInputTextComponent,
    ChatMainButtonComponent,
    ChatModalComponent,
    ImageBalloonComponent,
    OptionsBalloonComponent,
    SafePipe,
    TextBalloonComponent,
    TypingBalloonComponent
  ],
  entryComponents: [
    ChatAvatarComponent,
    ChatDialogLineComponent,
    ChatModalComponent,
    ImageBalloonComponent,
    OptionsBalloonComponent,
    TextBalloonComponent,
    TypingBalloonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    ConnectionService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
