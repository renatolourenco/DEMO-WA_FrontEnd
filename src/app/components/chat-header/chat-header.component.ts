import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from 'src/app/services/data/data.service';
import { ChatModalComponent } from '../chat-modal/chat-modal.component';

@Component({
  selector: 'dc-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  public avatarPath: String;

  constructor(private dataService: DataService, private modalService: NgbModal) {}

  ngOnInit() {
    this.avatarPath = `../../../assets/img/bot_avatar.png`
  }

  public open() {
    const modalRef = this.modalService.open(ChatModalComponent);
    modalRef.componentInstance.modal_title = 'Atenção!';
    modalRef.componentInstance.modal_body = 'Tem certeza que quer apagar todo o diálogo?';
    modalRef.componentInstance.modal_footer = true;
  }

  public closeChatWindow() {
    this.dataService.cleanVariables();
    this.dataService.setOpenChatWindow(false);
  }

}
