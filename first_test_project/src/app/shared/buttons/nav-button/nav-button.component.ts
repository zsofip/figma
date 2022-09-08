import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  @Input() btnText: string = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
  }

}
