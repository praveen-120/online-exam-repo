import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headers:Array<string>=['login','register']
  constructor() { }
  title:string='ABC EXAM PORTAL';
  ngOnInit(): void {
  }

}
