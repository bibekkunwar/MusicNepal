import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeItem: string = 'Home';

  setActive(item: string) {
    this.activeItem = item;
  }

  isActive(item: string) {
    return this.activeItem === item;
  }


  isSidebarActive: boolean = false;

  openSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.add('active');
  }

  closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('active');
  }
}
