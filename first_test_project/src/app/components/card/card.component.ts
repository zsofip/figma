import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card.model';
import { MatAppService } from 'src/app/services/mat-app.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() currentCard?: Card;

  bookingBtnText: string = "book";

  constructor(private matappservice: MatAppService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onBooking() {
    this.dialog.open(AlertComponent);
  }

}
