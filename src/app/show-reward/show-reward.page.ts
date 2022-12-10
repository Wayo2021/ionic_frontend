import { DrinkrewardService } from './../services/drinkreward.service';
import { Reward } from './../models/drinkreward.model';
import { ApiRequest } from './../models/login.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { Customers } from '../models/login.model';
import { filter } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Redeem } from '../models/drinkreward.model';

@Component({
  selector: 'app-show-reward',
  templateUrl: './show-reward.page.html',
  styleUrls: ['./show-reward.page.scss'],
})
export class ShowRewardPage implements OnInit {
  cus_id: any;
  rew_name: any;

  customers: Customers = {
    cus_id: null,
    cus_first_name: '',
    cus_last_name: '',
    cus_sex: null,
    cus_phone: null,
    cus_email: '',
    cus_password: '',
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point: null,
  };
  cus: Customers[];
  loginUser: Customers = {
    cus_id: null,
    cus_first_name: '',
    cus_last_name: '',
    cus_sex: null,
    cus_phone: null,
    cus_email: '',
    cus_password: '',
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point: null,
  };
  reward: Reward = {
    rew_id: null,
    rew_name: null,
    rew_remain: null,
    rew_point: null,
    rew_detail: null,
    image: null,
  };
  rew: Reward[];

  redeem: Redeem = {
    red_id: '',
    red_date: null,
    rew_amount: '',
    cus_id: '',
    rew_id: null,
    poi_id: null,
    emp_id: null,
    red_status: null,
    point_amount: null,
    get_status: null,
  };
  red: Redeem[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private router: Router,
    private storage: Storage,
    private alertController: AlertController,
    private drinkrewardService: DrinkrewardService
  ) {
    this.cus_id = this.activatedRoute.snapshot.paramMap.get('cus_id');
    console.log('ParamMap cus_id', this.cus_id);
    this.initStorage();
    router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((r: NavigationStart) => {
        this.loadPageData();
      });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadData();
  }
  loadData() {
    console.log('loadPageData', this.cus_id);
    this.drinkrewardService.getRedeem(this.cus_id).subscribe((response) => {
      console.log('Drink2Page>ionViewDisEnter>drinkrewardService.listDrink');
      this.red = response.data.redeem;
      console.log(this.redeem);
    });
  }

  async initStorage() {
    await this.storage.create();
  }
  async ionViewWillEnter() {
    console.log('Wayo');
    this.loginUser.cus_id = await this.getDataFromStorage('loginUser');
    console.log(this.loginUser.cus_id);
  }
  async getDataFromStorage(key: string) {
    const value = await this.storage.get(key);
    return value;
  }
  async setDataToStorage(key: string, data: any) {
    await this.storage.set(key, data);
  }
  async clearStorage() {
    await this.storage.clear();
  }

  loadCustomersData() {
    console.log(this.loginUser);
  }
  loadPageData() {
    this.drinkrewardService.listRedeem(this.cus_id).subscribe((response) => {
      console.log('DrinkPage>ionViewDisEnter>drinkrewardService.listTypes');
      this.red = response.data.listRedeem;
      console.log(this.red);
    });
  }
  loadreData() {
    this.drinkrewardService.listReward().subscribe((response) => {
      console.log('DrinkPage>ionViewDisEnter>drinkrewardService.listTypes');
      this.rew = response.data.listReward;
      console.log(this.rew);
    });
  }
  handleRefresh(event) {
    this.loadData();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1000);
  }
}
