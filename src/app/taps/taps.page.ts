import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from './../services/login.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Customers } from '../models/customers.model';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-taps',
  templateUrl: './taps.page.html',
  styleUrls: ['./taps.page.scss'],
})
export class TapsPage implements OnInit {
  cus_id: any;

  loginUser: Customers = {
    cus_id: null,
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: null,
    image: null,
    tot_id: null,
    cus_status: null,
    cus_point: null,
  };
  constructor(
    private router: Router,
    private customersService: CustomersService,
    private stroage: Storage,
    private alertController: AlertController
  ) {
    this.initStorage();
    router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((r: NavigationStart) => {
        // this.loadMemberData();
      });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.customersService.listCustomers().subscribe((response) => {
      console.log(response);
    });
  }

  async initStorage() {
    await this.stroage.create();
  }

  async ionViewWillEnter() {
    console.log('Wayo');
    this.loginUser = await this.getDataFromStorage('loginUser');
    console.log('-------------------', this.loginUser);
  }
  async getDataFromStorage(key: string) {
    const value = await this.stroage.get(key);
    return value;
  }
  async setDataToStorage(key: string, data: any) {
    await this.stroage.set(key, data);
  }
  async clearStorage() {
    await this.stroage.clear();
  }

  goProfile() {
    if (this.loginUser === null) {
      this.presentAlert();
    }
    if (this.loginUser !== null) {
      const cus_id = this.loginUser.cus_id;
      this.router.navigate(['/taps/profiles/' + this.loginUser.cus_id]);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'คุณยังไม่เข้าสู้ระบบ ',
      message: 'กรุณาเข้าสู่ระบบ',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
