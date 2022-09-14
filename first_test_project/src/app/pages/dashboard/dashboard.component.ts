import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { MatAppService } from 'src/app/services/mat-app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Card[] = this.matappservice.cards;

  constructor(private matappservice: MatAppService) { }

  ngOnInit(): void {
  }

}
