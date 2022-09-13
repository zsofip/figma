import { MatAppService } from './../../services/mat-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselImgs: string[] = this.matappservice.carouselImgs;

  constructor(private matappservice: MatAppService) { }

  ngOnInit(): void {
  }

}
