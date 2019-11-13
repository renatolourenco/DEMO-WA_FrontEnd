import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'dc-chat-main-button',
  templateUrl: './chat-main-button.component.html',
  styleUrls: ['./chat-main-button.component.css']
})
export class ChatMainButtonComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  openChatWindow() {
    this.dataService.setOpenChatWindow(true);
  }

}
