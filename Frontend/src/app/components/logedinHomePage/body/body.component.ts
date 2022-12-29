import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() isNavBarVisible = true;

  constructor(){}
  ngOnInit(): void {
  }

  getBodyClass(): string
  {
    let styleClass = '';

    if(!this.isNavBarVisible)
    {
      styleClass = 'body-hidden'
    }
    else if(this.collapsed && this.screenWidth > 786)
    {
      styleClass = 'body-trimmed'
    }
    else if(this.collapsed && this.screenWidth <= 786 && this.screenWidth > 0)
    {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
