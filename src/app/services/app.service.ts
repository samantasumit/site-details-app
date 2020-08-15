import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isSidebarExpanded: boolean;

  constructor() {
    this.isSidebarExpanded = false;
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  closeSidebar() {
    this.isSidebarExpanded = false;
  }
}
