import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data/data.service';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: String;
  public showChatWindow: Boolean;
  public showBackground: String;

  constructor(private dataService: DataService) {
    this.title = 'simple-chat-front';
    this.showChatWindow = false;
    this.showBackground = 'dc_chat_window-withoutBGC'
  }

  ngOnInit() {
    this.dataService.openChatWindow.subscribe(open => {
      this.showChatWindow = open;
      if (open) {
        this.showBackground = 'dc_chat_window-withBGC';
      } else {
        this.showBackground = 'dc_chat_window-withoutBGC'
      }
    });
    this.dataService.updateScroll.subscribe(() => {
      this.updateScroll();
    });
  }

  private updateScroll() {
    const chatBody = document.getElementById('dc_chat_body');
    setTimeout(() => {
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 250);
  }

}
