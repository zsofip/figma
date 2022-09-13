import { Alert } from '../models/alert';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { NavBtn } from '../models/navBtn';

@Injectable({
  providedIn: 'root'
})
export class MatAppService {

  carouselImgs: string[];

  navBtns: NavBtn[];

  cards: Card[];

  alerts: Alert[];

  constructor() {
    this.carouselImgs = [
      "carousel-img-1.svg",
      "carousel-img-2.svg",
      "carousel-img-3.svg",
      "carousel-img-4.svg",
    ],

      this.navBtns = [
        {
          icon: "recent-icon",
          text: "Recent"
        },
        {
          icon: "fav-icon",
          text: "Favorites"
        },
        {
          icon: "nearby-icon",
          text: "Nearby"
        }
      ],

      this.cards = [
        {
          cardImg: "card-img-1.svg",
          cardTitle: "Vien, Austria",
          bookingDate: "12.10-22.10.2022",
        },
        {
          cardImg: "card-img-2.svg",
          cardTitle: "Vien, Austria",
          bookingDate: "12.10-22.10.2022",
        },
        {
          cardImg: "card-img-3.svg",
          cardTitle: "Vien, Austria",
          bookingDate: "12.10-22.10.2022",
        },
        {
          cardImg: "card-img-4.svg",
          cardTitle: "Vien, Austria",
          bookingDate: "12.10-22.10.2022",
        },
      ],

      this.alerts = [{
        // "success": {
        //   statusIcon: "check_circle",
        //   message: "Your trip was successfully booked",
        //   cancelBtn: "cancel",
        // }

          statusIcon: "check_circle",
          message: "Your trip was successfully booked",
          cancelBtn: "cancel",
      }]
  }
}
