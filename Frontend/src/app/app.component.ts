import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  Instance : AppComponent | undefined
  @ViewChild(NavigationComponent) navigationComponent!: NavigationComponent;
  ngOnInit(): void {
    this.Instance = this;
  }
  
  title = 'ShareItAngular';
  
  isNavBarVisible = true;
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  setNavBarVisiblity(isVisible : boolean)
  {
    this.isNavBarVisible = isVisible;
  }
}
