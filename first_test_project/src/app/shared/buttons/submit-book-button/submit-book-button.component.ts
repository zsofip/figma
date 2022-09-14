import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-book-button',
  templateUrl: './submit-book-button.component.html',
  styleUrls: ['./submit-book-button.component.css']
})
export class SubmitBookButtonComponent implements OnInit {

  @Input() btnText: string = 'test';

  constructor() { }

  ngOnInit(): void {
  }

}
