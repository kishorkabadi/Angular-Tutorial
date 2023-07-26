import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postParentMessage: string = "message coming from post component";
  childMessage: string = "From Child Component";
  outputChildMessage: string = "Message come from child component view output";

  @Input()
  fromParent!: string;
  
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
