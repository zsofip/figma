import { Component, OnInit } from '@angular/core';
import { NavBtn } from 'src/app/models/navBtn.model';
import { MatAppService } from 'src/app/services/mat-app.service';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  navBtns: NavBtn[] = this.matappservice.navBtns;


  constructor(private matappservice: MatAppService) { }

  ngOnInit(): void {
  }

  onClick() {
  }

}
