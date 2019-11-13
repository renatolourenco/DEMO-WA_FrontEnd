import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'dc-chat-input-text',
  templateUrl: './chat-input-text.component.html',
  styleUrls: ['./chat-input-text.component.css']
})
export class ChatInputTextComponent implements OnInit, AfterViewInit {

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataService.startDialog();
  }

  sendTxt(text) {
    if (text !== '') {
      this.dataService.sendMessageToWatson({ 'user_text': text });
    }
  }

}
