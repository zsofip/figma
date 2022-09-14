import { MatAppService } from './../../services/mat-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselImgs: string[] = this.matappservice.carouselImgs;

  username?: any;

  constructor(private matappservice: MatAppService) { }

  ngOnInit(): void {
  }

  showName() {
    // console.log(this.matappservice.users[this.matappservice.users.length - 1]);
    this.username = this.matappservice.users[this.matappservice.users.length - 1];
  }

}
