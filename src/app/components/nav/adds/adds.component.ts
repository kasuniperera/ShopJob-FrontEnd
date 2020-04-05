import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {

  isCollapsed : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }

}
