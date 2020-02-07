import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public items1 = [
    { img: "assets/introimage/Wnecklace17.jpg", name: "Women", designation: "unique designs" },
    { img: "assets/introimage/Mring11.jpg", name: "Men", designation: "" },
    { img: "assets/introimage/kid.jpg", name: "Kids", designation: "Special jewellery" },
  ];
  constructor() { }

  ngOnInit() {}

}
