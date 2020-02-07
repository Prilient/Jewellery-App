import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  //banner images
  slides = [
    "assets/introimage/Banner1.jpg",
    "assets/introimage/Banner6.jpg",
    "assets/introimage/Banner8.jpg",
    "assets/introimage/Banner1.jpg",
    
  ];
  constructor() { }

  ngOnInit() { }

}
