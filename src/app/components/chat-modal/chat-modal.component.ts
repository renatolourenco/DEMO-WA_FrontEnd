import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'dc-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.css']
})
export class ChatModalComponent implements OnInit, AfterViewInit {

  public docConfirmationWindow: Boolean;
  public roleAccepted: Boolean;
  @Input() modal_title;
  @Input() modal_body;
  @Input() modal_footer;

  constructor(private dataService: DataService, public activeModal: NgbActiveModal) {
    this.docConfirmationWindow = false;
    this.roleAccepted = false;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.modal_footer === 'docConfirmation') {
      this.docConfirmationWindow = true;
    }
  }

  public cleanDialog() {
    localStorage.removeItem('simple_advisor');
    this.dataService.cleanVariables();
    this.dataService.setOpenChatWindow(false);
  }

  public getChecks() {
    this.roleAccepted = !this.roleAccepted;
  }

  public saveRole() {
    if (this.roleAccepted) {
      const userMsg = { 'user_text': 'Ciente das regras de retirada' }
      const dateObj = {
        confirm_role: true
      }
      this.dataService.sendMessageToWatson(userMsg, dateObj);
    }
  }

}
