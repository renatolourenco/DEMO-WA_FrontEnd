import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'dc-options-balloon',
  templateUrl: './options-balloon.component.html',
  styleUrls: ['./options-balloon.component.css']
})
export class OptionsBalloonComponent implements OnInit {

  public optionsList: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  public setOptionsList(obj: Object) {
    this.optionsList = obj;
  }

  public sendButtonValueToWatson(txt: String) {
    this.dataService.sendMessageToWatson({ 'user_text': txt })
  }

}
