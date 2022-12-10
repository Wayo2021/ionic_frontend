import { CustomersService } from './../services/customers.service';
import { DrinkrewardService } from './../services/drinkreward.service';
import { Component, OnInit } from '@angular/core';
import { Reward, Redeem } from '../models/drinkreward.model';
import { Customers } from '../models/customers.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  NavController,
  AlertController,
  LoadingController,
  AlertOptions,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-redeem2',
  templateUrl: './redeem2.page.html',
  styleUrls: ['./redeem2.page.scss'],
})
export class Redeem2Page implements OnInit {
  rew_id: any;
  cus_phone: any;
  rew_point: any;
  rew_amount: any;

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
    red_id: null,
    red_date: null,
    rew_amount: null,
    cus_id: null,
    rew_id: null,
    poi_id: null,
    emp_id: null,
    red_status: null,
    point_amount: null,
    get_status: null,
  };
  loginUser: Customers = {
    cus_id: '',
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: null,
    image: null,
    cus_status: null,
    tot_id: '',
    cus_point: null,
  };

  customers: Customers = {
    cus_id: '',
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: null,
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point: null,
  };
  cus: Customers[];

  constructor(
    private drinkrewardService: DrinkrewardService,
    private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.rew_id = this.activatedRoute.snapshot.paramMap.get('rew_id');
    console.log('ParamMap ID', this.rew_id);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadPageData();
  }

  loadPageData() {
    console.log('loadPageData', this.rew_id);
    this.drinkrewardService.getReward(this.rew_id).subscribe((response) => {
      console.log('Page>ionViewDisEnter>Service.listUnseen');
      this.rew = response.data.reward;
      console.log(this.reward);
    });
  }

  async Redeem() {
    console.log(this.redeem);
    let data = {
      rew_id: this.rew_id,
      rew_point: this.reward.rew_point,
      rew_amount: this.redeem.rew_amount,
      cus_phone: this.cus_phone,
    };
    console.log(data);
    this.drinkrewardService.createRedeem(data).subscribe(async (response) => {
      console.log('Success ===', response);
      console.log('status ===', response.status);
      if (response.status === 'success') {
        this.presentAlert();
        this.resetRewardData();
      }else if (response.status === 'error1') {
        this.presentAlert2();
        this.resetRewardData();
      } else if (response.status === 'error2') {
        this.presentAlert3();
        this.resetRewardData();
      } else if (response.status === 'error3') {
        this.presentAlert4();
        this.resetRewardData();
      } else if (response.status === 'error5') {
        this.presentAlert5();
        this.resetRewardData();
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แลกของรางวัล',
      message: 'คุณต้องการแลกของรางวัลหรือไม่',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.presentAlert6();
          },
        },
        {
          text: 'ยกเลิก',
          handler: (blah) => {
            this.router.navigate(['/redeem2']);
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlert6() {
    const alert = await this.alertController.create({
      header: 'แลกของรางวัลสำเร็จ',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/taps/redeem']);
          },
        }
      ],
    });
    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'แลกของรางวัลไม่สำเร็จ',
      message: 'เนื่องจากของรางวัลไม่เพียงพอ',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/taps/redeem']);
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'แลกของรางวัลไม่สำเร็จ',
      message: 'เนื่องจากคะแนนสะสมของคุณไม่เพียงพอ',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/taps/redeem']);
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'แลกของรางวัลไม่สำเร็จ',
      message: 'เนื่องจากของรางวัลไม่เพียงพอ',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/taps/redeem']);
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlert5() {
    const alert = await this.alertController.create({
      header: 'แลกของรางวัลไม่สำเร็จ',
      message: 'เนื่องจากเบอร์โทรนี้ไม่มีผู้ใช้งานไม่เพียงพอ',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/redeem2']);
          },
        },
      ],
    });
    await alert.present();
  }

  resetRewardData() {
    this.redeem = {
      red_id: null,
      red_date: null,
      rew_amount: null,
      cus_id: null,
      rew_id: null,
      poi_id: null,
      emp_id: null,
      red_status: null,
      point_amount: null,
      get_status: null,
    };
  }
}
