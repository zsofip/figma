import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  link: string = '';

  @Input() type: string = 'user-icon';

  constructor() { }

  ngOnInit(): void {
    this.link = `../../../../assets/icon-svgs/${this.type}.svg`;
  }

}
