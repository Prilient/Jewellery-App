import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController, NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../shared-data/shared-data.service';
import { ConfigService } from '../../config/config.service';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
})
export class MyOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}


