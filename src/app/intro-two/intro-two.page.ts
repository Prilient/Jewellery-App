import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.page.html',
  styleUrls: ['./intro-two.page.scss'],
})
export class IntroTwoPage implements OnInit {
  slidesHeader = 'Discover Latest Trends';
  slidesPara = 'Over Thousands of Latest Products Online.';
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/introimage/ss2.jpg" },
    { image: "assets/introimage/ss4.jpg" },
    { image: "assets/introimage/ss1.jpg" },
    { image: "assets/introimage/ss5.jpg" },
  
  ];
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController,
    private splashScreen: SplashScreen,
    public theme: ThemeService) {

  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    this.autoSlides.startAutoplay();
  }
  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      if (index == 0) {
        this.slidesHeader = 'UNIQUE DESIGNS';
        this.slidesPara = 'Choose from over 6000+ inimitable designs.';

      }
      if (index == 1) {
        this.slidesHeader = 'HOME TRY-ON';
        this.slidesPara = 'Can`t make up your mind? Get a free jewellery trial at your doorstep.';
      }
      if (index == 2) {
        this.visiable = true;
        this.slidesHeader = 'KIDS SPECIAL';
        this.slidesPara = 'The choose over 2000+ unique jwellery designs .';
      }
      if (index == 3) {
        this.visiable = true;
        this.slidesHeader = 'STORES';
        this.slidesPara = 'want s personal touch? Visit any of our 500+ stores.';
      }
     
      else {
        this.visiable = false;
      }
    });
  }

  nextSlide() {
    this.autoSlides.slideNext();
  }
  ngOnInit() {
  }
}
