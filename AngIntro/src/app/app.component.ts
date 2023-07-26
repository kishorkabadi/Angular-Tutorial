import { Component, ViewChild, AfterViewInit ,AfterContentChecked, ChangeDetectorRef} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,AfterContentChecked {
  title = 'AngIntro';

  parentMessage: string = "Message coming from parent componenet";

  @ViewChild(PostComponent)
  childComponent!: any;

  message!: string;

  fromChildOutput: string="";

  constructor(private changeDetector: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.message = this.childComponent.childMessage;
    }, 0);

   
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  recieveMessage($event: any) {
    this.fromChildOutput = $event;
  }
}
