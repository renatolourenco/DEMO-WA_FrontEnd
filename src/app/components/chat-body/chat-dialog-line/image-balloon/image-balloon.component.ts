import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-image-balloon',
  templateUrl: './image-balloon.component.html',
  styleUrls: ['./image-balloon.component.css']
})
export class ImageBalloonComponent implements OnInit {

  public imageInfo: String;
  public imageTitle: String;
  public imageUrl: String;

  constructor() { }

  ngOnInit() { }

  public setImageData(imgObj: Object) {
    this.imageInfo = imgObj['description'];
    this.imageTitle = imgObj['title'];
    this.imageUrl = imgObj['source'];
  }

}
