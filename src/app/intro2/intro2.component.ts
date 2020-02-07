import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
const themes = {
  black: {
    primary: 'black',
    secondary: 'black',
    tertiary: 'white',
    light: 'black',
    dark: 'black',
    medium: 'black',
  }
};

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.component.html',
  styleUrls: ['./intro2.component.scss'],
})
export class Intro2Component implements OnInit {
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/introimage/ss.jpg", title: "UNIQUE DESIGNS", icon: "", text: "Choose from over 7000+ inimitable jewellery designs ." },
    { image: "assets/introimage/ss1.jpg", title: "HOME TRY-ON", icon: "", text: "Can`t make up your mind? Get free jewellery trial at your doorstep." },
    { image: "assets/introimage/ss4.jpg", title: "KIDS SPECIAL", icon: "", text: "The choose over 2000+ unique jwellery designs ." },
    { image: "assets/introimage/ss3.jpg", title: "STORIES", icon: "", text: "Want a personal touch? Visit any of our 600+ stories." }
  ];

  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController, public theme: ThemeService, public splashscreen: SplashScreen) {
  }

  ngOnInit() { }
  ionViewWillEnter() {
    // For Local Storage And Color Scheme 
    this.theme.getTheme().then((result) => {
      let val = result;
      if (val == undefined) {
        this.theme.setTheme(themes['black'], 'black');
      }
    });
     this.menuCtrl.enable(false, 'Menu1');
     this.menuCtrl.enable(false, 'Menu3');
     this.menuCtrl.enable(true, 'Menu2');
  }
  ionViewDidEnter() {
    this.splashscreen.hide();
    this.autoSlides.startAutoplay();
  }
  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      if (index == 4) {
        this.visiable = true;
      }
      else {
        this.visiable = false;
      }
    });
  }

  goToHomeEcom() {
    this.navCtrl.navigateForward('/login');
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }

}
