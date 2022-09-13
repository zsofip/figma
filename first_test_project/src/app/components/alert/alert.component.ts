import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Alert } from 'src/app/models/alert';
import { MatAppService } from 'src/app/services/mat-app.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = this.matappservice.alerts;

  constructor(public dialogRef: MatDialogRef<AlertComponent>, private matappservice: MatAppService) { }

  ngOnInit(): void {
  }

}
