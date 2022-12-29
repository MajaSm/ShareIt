
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
interface SideNavHidden{
  navBarVisible: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
 
})
export class NavigationComponent implements OnInit {

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  @Output() onNavBarVisibilityChanged : EventEmitter<SideNavHidden> = new EventEmitter();
  @Input() isNavBarVisible = true;
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  Instance : NavigationComponent | undefined;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 768){
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
      }
    }
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.Instance = this;
    this.screenWidth = window.innerWidth;
  }
 
  toggleCollapse() :void
  {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav() :void
  {
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth})
  }
}
