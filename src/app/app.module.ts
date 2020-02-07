import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// import { IntroPageModule } from './intro/intro.module';
import {Intro2Component} from './intro2/Intro2.component';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { ConfigService } from './i-becrux-side/providers/config/config.service';
import { SharedDataService } from './i-becrux-side/providers/shared-data/shared-data.service';
import { LocationDataService } from './i-becrux-side/providers/location-data/location-data.service';
// For Modals
import { CurrencyListPageModule } from './i-becrux-side//Pages/currency-list/currency-list.module';
import { PrivacyPolicyPageModule } from './i-becrux-side//Pages/privacy-policy/privacy-policy.module';
import { TermServicesPageModule } from './i-becrux-side//Pages/term-services/term-services.module';
import { RefundPolicyPageModule } from './i-becrux-side//Pages/refund-policy/refund-policy.module';
import { SelectCountryPageModule } from './i-becrux-side//Pages/select-country/select-country.module';
import { SelectZonesPageModule } from './i-becrux-side//Pages/select-zones/select-zones.module';
import { LanguagePageModule } from './i-becrux-side//Pages/language/language.module';
import { ScratchCardPageModule } from './i-becrux-side//Pages/scratch-card/scratch-card.module';
import { BlankModalPageModule } from './i-becrux-side//Pages/blank-modal/blank-modal.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { IntroPage } from './i-becrux-side/Pages/intro/intro.page';
import {  IntroTwoPage } from './intro-two/intro-two.page';
import { BannerComponent } from "./banner/banner.component";
import { ThankyouComponent} from "./thankyou/thankyou.component";
import { MyOrderComponent } from './my-order/my-order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    Intro2Component,
    IntroPage,
    IntroTwoPage,
    BannerComponent,
    ThankyouComponent,
    MyOrderComponent,
    AboutUsComponent,
    ContactUsComponent
    
  ],
  imports: [
    FormsModule,
    //Intro2Component,
    BrowserModule,
    BrowserAnimationsModule,
    //Storage,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BlankModalPageModule,
    PrivacyPolicyPageModule,
    TermServicesPageModule,
    RefundPolicyPageModule,
    SelectCountryPageModule,
    SelectZonesPageModule,
    LanguagePageModule,
    ScratchCardPageModule,
    CurrencyListPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StatusBar,
    ConfigService,
    LocationDataService,
    SharedDataService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

