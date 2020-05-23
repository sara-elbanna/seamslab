import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed = true;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
